import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// ─── Config ──────────────────────────────────────────────────────────────────

const GITHUB_REPO = 'romsweb/shieldpulse-landing';
const GITHUB_BRANCH = 'main';
const KEYWORD_LOG_PATH = 'content/blog/_keyword-log.json';
const BLOG_CONTENT_PATH = 'content/blog';

const CLAUDE_MODEL = 'claude-sonnet-4-20250514';

const SYSTEM_PROMPT = `Tu es un expert MSP/cybersécurité qui écrit pour ses pairs. Tu t'adresses à des MSP owners et operations managers qui gèrent entre 50 et 2000 machines sur Acronis Cyber Protect.

AVATAR LECTEUR :
- Owner ou Ops Manager d'un MSP
- Gère des dizaines de clients, des centaines de machines
- Sa douleur quotidienne : impossible de vérifier manuellement chaque backup chaque jour
- Les échecs passent inaperçus, les SLAs sont violés, les clients perdent des données
- Il cherche : automatisation, visibilité centralisée, triage des faux positifs, reporting matinal
- Profil technique mais pas dev — pense efficacité opérationnelle et rétention client
- Gère une équipe de techniciens

STYLE :
- Ton praticien qui parle à un pair, jamais un marketeur qui vend
- Angles : "comment gérer X dans un MSP", pas "top 10 des solutions"
- Toujours partir d'un pain point opérationnel concret (backups ratés non détectés, clients mécontents, audit compliance raté, techniciens submergés de faux positifs)
- Vocabulaire natif MSP : tenant, machine, protection plan, failover, RTO/RPO, PSA, RMM, SLA — pas besoin de vulgariser
- Structuré : intro accrocheuse basée sur un scénario réel, H2/H3 clairs, paragraphes courts, conclusion actionnable
- Longueur : 1200-1800 mots
- CTA subtil en conclusion : mentionner que ShieldPulse (shieldpulse.io) résout ce problème spécifique — une phrase, pas de hard sell
- Inclure le keyword principal naturellement dans le titre, l'intro, un H2, et la conclusion — jamais de keyword stuffing
- Langue : anglais

FORMAT DE SORTIE :
Tu dois retourner UNIQUEMENT le fichier markdown complet, sans aucun commentaire avant ou après. Le fichier doit commencer par --- (frontmatter YAML) et contenir :

---
title: "Titre ici (< 60 caractères)"
description: "Meta description ici (< 155 caractères)"
date: {TODAY_DATE}
tags: [tag1, tag2, tag3]
slug: slug-ici-en-kebab-case
readingTime: X
---

Contenu markdown ici...

RÈGLES CONTENU :
- Inclure au moins un lien interne vers [ShieldPulse](https://shieldpulse.io) et un vers [pricing](/pricing) quand c'est pertinent
- Terminer avec une section ## FAQ contenant 2-3 questions/réponses pertinentes
- Après le FAQ, inclure un bloc <script type="application/ld+json"> avec le FAQPage schema correspondant
- Ne pas inclure de H1 — le titre est dans le frontmatter
- Utiliser ## pour les sections principales et ### pour les sous-sections`;

// ─── Helpers ─────────────────────────────────────────────────────────────────

interface KeywordLog {
  covered: Array<{
    keyword: string;
    slug: string;
    title: string;
    date: string;
    source: string;
    volume?: number;
    difficulty?: number;
  }>;
  seedKeywords: string[];
}

interface KeywordData {
  keyword: string;
  volume: number;
  cpc: number;
  competition: number;
  difficulty?: number;
}

async function githubGet(path: string, token: string): Promise<{ content: string; sha: string }> {
  const res = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${path}?ref=${GITHUB_BRANCH}`, {
    headers: { Authorization: `token ${token}`, Accept: 'application/vnd.github.v3+json' },
  });
  if (!res.ok) throw new Error(`GitHub GET ${path}: ${res.status} ${await res.text()}`);
  const data = await res.json();
  const content = Buffer.from(data.content, 'base64').toString('utf-8');
  return { content, sha: data.sha };
}

async function githubPut(path: string, content: string, message: string, token: string, sha?: string): Promise<void> {
  const body: Record<string, unknown> = {
    message,
    content: Buffer.from(content).toString('base64'),
    branch: GITHUB_BRANCH,
  };
  if (sha) body.sha = sha;

  const res = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${path}`, {
    method: 'PUT',
    headers: {
      Authorization: `token ${token}`,
      Accept: 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`GitHub PUT ${path}: ${res.status} ${await res.text()}`);
}

// ─── Step 1: Keyword Research ────────────────────────────────────────────────

async function fetchKeywordData(keywords: string[], apiKey: string): Promise<KeywordData[]> {
  console.log(`[cron] Fetching keyword data for ${keywords.length} keywords...`);

  const params = new URLSearchParams();
  params.append('dataSource', 'gkp');
  params.append('country', 'us');
  params.append('currency', 'USD');
  for (const kw of keywords) {
    params.append('kw[]', kw);
  }

  const res = await fetch('https://api.keywordseverywhere.com/v1/get_keyword_data', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString(),
  });

  if (!res.ok) {
    const text = await res.text();
    console.warn(`[cron] Keywords Everywhere API failed: ${res.status} ${text}`);
    return [];
  }

  const data = await res.json();
  if (!data.data) {
    console.warn('[cron] Keywords Everywhere returned no data:', JSON.stringify(data));
    return [];
  }

  return (data.data as any[]).map((kw: any) => ({
    keyword: kw.keyword,
    volume: kw.vol || 0,
    cpc: kw.cpc?.value || 0,
    competition: kw.competition || 0,
    difficulty: kw.difficulty || kw.seo_difficulty || 0,
  }));
}

function selectBestKeyword(
  keywordData: KeywordData[],
  coveredKeywords: Set<string>,
  seedKeywords: string[],
): { keyword: string; volume: number; difficulty: number } | null {
  // Filter: volume > 100, difficulty < 40, not already covered
  const candidates = keywordData.filter(
    (kw) =>
      kw.volume > 100 &&
      ((kw.difficulty ?? 0) === 0 || (kw.difficulty ?? 0) < 40) &&
      !coveredKeywords.has(kw.keyword.toLowerCase()),
  );

  console.log(`[cron] ${candidates.length} candidates after filtering (of ${keywordData.length} total)`);

  if (candidates.length === 0) return null;

  // Sort by volume descending (highest traffic first)
  candidates.sort((a, b) => b.volume - a.volume);
  return { keyword: candidates[0].keyword, volume: candidates[0].volume, difficulty: candidates[0].difficulty ?? 0 };

}

function pickFallbackKeyword(seedKeywords: string[], coveredKeywords: Set<string>): string {
  const unused = seedKeywords.filter((kw) => !coveredKeywords.has(kw.toLowerCase()));
  if (unused.length === 0) {
    // All seeds covered — generate a variation
    return seedKeywords[Math.floor(Math.random() * seedKeywords.length)] + ' guide';
  }
  return unused[Math.floor(Math.random() * unused.length)];
}

// ─── Step 2: Content Generation ──────────────────────────────────────────────

async function generateArticle(keyword: string, apiKey: string): Promise<string> {
  const today = new Date().toISOString().split('T')[0];
  const prompt = `Write a blog article targeting the keyword: "${keyword}"

The date for the frontmatter is: ${today}

Remember:
- The slug should be derived from the keyword in kebab-case
- Include the keyword naturally in the title, intro, one H2, and conclusion
- Include internal links to https://shieldpulse.io and /pricing
- End with a FAQ section (2-3 questions) and FAQ schema JSON-LD
- 1200-1800 words
- Output ONLY the complete markdown file starting with ---`;

  console.log(`[cron] Calling Claude API with keyword: "${keyword}"...`);

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: CLAUDE_MODEL,
      max_tokens: 4096,
      system: SYSTEM_PROMPT.replace('{TODAY_DATE}', today),
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Claude API failed: ${res.status} ${text}`);
  }

  const data = await res.json();
  const content = data.content?.[0]?.text;
  if (!content) throw new Error('Claude API returned empty content');

  console.log(`[cron] Claude generated ${content.length} characters`);
  return content.trim();
}

// ─── Step 3: Parse & Validate ────────────────────────────────────────────────

function parseGeneratedPost(markdown: string): { slug: string; title: string; frontmatter: string; fullContent: string } {
  // Extract frontmatter
  const fmMatch = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!fmMatch) throw new Error('Generated content has no valid frontmatter');

  const frontmatter = fmMatch[1];

  // Extract slug from frontmatter
  const slugMatch = frontmatter.match(/^slug:\s*(.+)$/m);
  if (!slugMatch) throw new Error('Generated content has no slug in frontmatter');
  let slug = slugMatch[1].trim().replace(/['"]/g, '');
  // Ensure kebab-case
  slug = slug.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');

  // Extract title
  const titleMatch = frontmatter.match(/^title:\s*["']?(.+?)["']?\s*$/m);
  const title = titleMatch ? titleMatch[1] : slug;

  return { slug, title, frontmatter, fullContent: markdown };
}

// ─── Main Handler ────────────────────────────────────────────────────────────

export async function GET(request: NextRequest) {
  const startTime = Date.now();
  console.log('[cron] ═══════════════════════════════════════════');
  console.log('[cron] Blog post generation started');

  // ── Auth ──
  const authHeader = request.headers.get('authorization');
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    console.warn('[cron] Unauthorized request');
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const githubToken = process.env.GITHUB_TOKEN;
  const anthropicKey = process.env.ANTHROPIC_API_KEY;
  const keywordsKey = process.env.KEYWORDS_EVERYWHERE_API_KEY;

  if (!githubToken || !anthropicKey) {
    console.error('[cron] Missing required env vars (GITHUB_TOKEN or ANTHROPIC_API_KEY)');
    return NextResponse.json({ error: 'Missing env vars' }, { status: 500 });
  }

  try {
    // ── Step 1: Read keyword log ──
    console.log('[cron] Step 1: Reading keyword log from GitHub...');
    const { content: logRaw, sha: logSha } = await githubGet(KEYWORD_LOG_PATH, githubToken);
    const keywordLog: KeywordLog = JSON.parse(logRaw);
    const coveredKeywords = new Set(keywordLog.covered.map((c) => c.keyword.toLowerCase()));
    console.log(`[cron] ${keywordLog.covered.length} keywords already covered`);

    // ── Step 2: Keyword research ──
    let chosenKeyword: string;
    let volume = 0;
    let difficulty = 0;

    if (keywordsKey) {
      console.log('[cron] Step 2: Keyword research via Keywords Everywhere...');
      const keywordData = await fetchKeywordData(keywordLog.seedKeywords, keywordsKey);
      const best = selectBestKeyword(keywordData, coveredKeywords, keywordLog.seedKeywords);

      if (best) {
        chosenKeyword = best.keyword;
        volume = best.volume;
        difficulty = best.difficulty;
        console.log(`[cron] Selected keyword: "${chosenKeyword}" (vol: ${volume}, diff: ${difficulty})`);
      } else {
        console.log('[cron] No suitable keyword from API, using fallback...');
        chosenKeyword = pickFallbackKeyword(keywordLog.seedKeywords, coveredKeywords);
        console.log(`[cron] Fallback keyword: "${chosenKeyword}"`);
      }
    } else {
      console.log('[cron] No Keywords Everywhere API key, using fallback...');
      chosenKeyword = pickFallbackKeyword(keywordLog.seedKeywords, coveredKeywords);
      console.log(`[cron] Fallback keyword: "${chosenKeyword}"`);
    }

    // ── Step 3: Generate content ──
    console.log('[cron] Step 3: Generating article with Claude...');
    const markdown = await generateArticle(chosenKeyword, anthropicKey);

    // ── Step 4: Parse & validate ──
    console.log('[cron] Step 4: Parsing generated content...');
    const { slug, title, fullContent } = parseGeneratedPost(markdown);
    console.log(`[cron] Article: "${title}" → ${slug}.md`);

    // ── Step 5: Commit post to GitHub ──
    const postPath = `${BLOG_CONTENT_PATH}/${slug}.md`;
    console.log(`[cron] Step 5: Committing ${postPath} to GitHub...`);
    await githubPut(
      postPath,
      fullContent,
      `blog: auto-generate "${title}"`,
      githubToken,
    );
    console.log('[cron] Post committed successfully');

    // ── Step 6: Update keyword log ──
    console.log('[cron] Step 6: Updating keyword log...');
    const today = new Date().toISOString().split('T')[0];
    keywordLog.covered.push({
      keyword: chosenKeyword,
      slug,
      title,
      date: today,
      source: 'auto',
      volume,
      difficulty,
    });

    await githubPut(
      KEYWORD_LOG_PATH,
      JSON.stringify(keywordLog, null, 2) + '\n',
      `blog: update keyword log — "${chosenKeyword}"`,
      githubToken,
      logSha,
    );
    console.log('[cron] Keyword log updated');

    // ── Step 7: Send notification email ──
    try {
      const resendKey = process.env.RESEND_API_KEY;
      if (resendKey) {
        console.log('[cron] Step 7: Sending notification email...');
        const resend = new Resend(resendKey);
        const postUrl = `https://shieldpulse.io/blog/${slug}`;
        const gscUrl = 'https://search.google.com/search-console?resource_id=sc-domain%3Ashieldpulse.io';

        await resend.emails.send({
          from: 'ShieldPulse Blog <support@updates.shieldpulse.io>',
          to: 'contact@shieldpulse.io',
          subject: `New blog post published: ${title}`,
          html: `
            <div style="font-family: -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0d1117; color: #e0e0e0; border-radius: 8px;">
              <h2 style="color: #00ff88; margin-top: 0;">New Blog Post Published</h2>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr><td style="padding: 8px 0; color: #8899aa;">Title</td><td style="padding: 8px 0; color: #e0e0e0; font-weight: bold;">${title}</td></tr>
                <tr><td style="padding: 8px 0; color: #8899aa;">Keyword</td><td style="padding: 8px 0; color: #e0e0e0;">${chosenKeyword}</td></tr>
                <tr><td style="padding: 8px 0; color: #8899aa;">Volume / Difficulty</td><td style="padding: 8px 0; color: #e0e0e0;">${volume} / ${difficulty}</td></tr>
                <tr><td style="padding: 8px 0; color: #8899aa;">Date</td><td style="padding: 8px 0; color: #e0e0e0;">${today}</td></tr>
                <tr><td style="padding: 8px 0; color: #8899aa;">Slug</td><td style="padding: 8px 0; color: #e0e0e0;">${slug}</td></tr>
              </table>
              <div style="margin-top: 20px; display: flex; gap: 12px;">
                <a href="${postUrl}" style="display: inline-block; padding: 10px 20px; background: #00ff88; color: #000; text-decoration: none; border-radius: 4px; font-weight: bold; font-size: 14px;">View Post</a>
                <a href="${gscUrl}" style="display: inline-block; padding: 10px 20px; background: #1e2a3a; color: #4A9EFF; text-decoration: none; border-radius: 4px; font-weight: bold; font-size: 14px; border: 1px solid #4A9EFF;">Open Search Console</a>
              </div>
              <p style="margin-top: 20px; font-size: 12px; color: #556677;">Auto-generated by ShieldPulse Blog Cron</p>
            </div>
          `,
        });
        console.log('[cron] Notification email sent');
      } else {
        console.log('[cron] Step 7: Skipped — no RESEND_API_KEY');
      }
    } catch (emailErr) {
      console.warn('[cron] Email notification failed (non-blocking):', emailErr instanceof Error ? emailErr.message : emailErr);
    }

    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log(`[cron] ✓ Done in ${elapsed}s — "${title}" (${slug})`);
    console.log('[cron] ═══════════════════════════════════════════');

    return NextResponse.json({
      success: true,
      keyword: chosenKeyword,
      slug,
      title,
      volume,
      difficulty,
      elapsed: `${elapsed}s`,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error(`[cron] ✗ Failed: ${message}`);
    console.log('[cron] ═══════════════════════════════════════════');
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
