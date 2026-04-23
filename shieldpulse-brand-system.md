# ShieldPulse.io — Brand System v2.1

> Reference document for consistent content creation across all channels and AI tools.
> **Version 2.1 — April 2026.** Fixed email sender vs reply-to guidance. Previous v2 corrections: accent color realigned, Veeam status calibrated, secondary palette extended, email templates added, icon/emoji conventions formalized, humanizer skill integration.

---

## 1. ABOUT

**Brand name:** ShieldPulse

**Domain:** shieldpulse.io

**One-liner:** Decision speed for MSP backup monitoring — shows you the problems that actually matter.

**What it replaces:** Backup Radar ($650/mo), Acronis native reporting, manual multi-datacenter dashboard checking.

**Stack today:** Acronis Cyber Protect Cloud (production, primary).
**Stack roadmap:** Veeam connector planned for late 2026 (exploration phase).
**Future stack consideration:** Datto, Ahsay, others depending on demand signal.

**Audience:** MSPs (Managed Service Providers) who manage backup monitoring across dozens or hundreds of client devices. They're drowning in alerts, dashboards, and noise. They want to stop scanning and start acting.

**Brand feel (3 words):** Technique. Direct. Minimal.

**Brand personality:** ShieldPulse talks like a senior engineer who respects your time. No fluff, no marketing speak, no buzzwords. Every word earns its place. The brand is confident without being arrogant — it knows the problem because it lived it.

---

## 2. COLOURS

Extracted from the ShieldPulse.io landing page and app dashboard. Updated post-K4 split between accent and success states.

### Primary palette

| Role | Colour | Hex | Usage |
|------|--------|-----|-------|
| **Background (dark)** | Near-black green | `#0B0F0D` | Page backgrounds, cards, dark sections |
| **Surface** | Dark charcoal | `#141A16` | Card surfaces, elevated panels, code blocks |
| **Accent (primary)** | Yellow-green | `#a8ff60` | CTAs, highlights, active states, badges, key data, brand pulse |
| **Status — Success** | Phosphor green | `#00ff88` | Success states only — distinct from accent to avoid "everything glows green" |
| **Text (primary)** | Off-white | `#E8ECE9` | Body text, headings on dark backgrounds |
| **Text (muted)** | Soft grey-green | `#8B9A8F` | Secondary text, captions, labels |

### Secondary palette — status

| Role | Colour | Hex | Usage |
|------|--------|-----|-------|
| **Warning / Caution** | Amber orange | `#F59E0B` | Warning states, streaks 1-3 days, "needs attention" badges |
| **Alert / Error** | Signal red | `#FF4444` | Error states, critical alerts, failure badges, danger indicators |
| **Info / Link** | Light blue | `#4A9EFF` | Acronis badges, external links, informational elements |
| **Border / Divider** | Faint green | `#1E2B22` | Subtle borders, separators, grid lines |

### Secondary palette — data visualization (added v2)

| Role | Colour | Hex | Usage |
|------|--------|-----|-------|
| **Score gauge — full** | Phosphor green | `#00ff88` | Health score 90-100, full gauge fill |
| **Score gauge — partial** | Amber | `#F59E0B` | Health score 60-89, partial gauge fill |
| **Score gauge — low** | Red | `#FF4444` | Health score 0-59, low gauge fill |
| **Streak — early** | Soft amber | `#F59E0B66` | Streak days 1-3 (40% opacity) |
| **Streak — escalating** | Solid amber | `#F59E0B` | Streak days 4-7 |
| **Streak — critical** | Red | `#FF4444` | Streak days 8+ |
| **Background — hover** | Surface +5% | `#1A211C` | Row hover, button hover surfaces |
| **Background — selected** | Accent 10% | `#a8ff601A` | Selected row, active filter |

### Email-specific palette (added v2)

For transactional emails. Slightly higher contrast than the app to compensate for varied email client rendering.

| Role | Colour | Hex | Usage |
|------|--------|-----|-------|
| **Email background** | Near-black | `#0B0F0D` | Email body background |
| **Email surface** | Dark charcoal | `#141A16` | Content card inside the email |
| **Email accent CTA** | Yellow-green | `#a8ff60` | Primary CTA button background |
| **Email CTA text** | Pure black | `#000000` | Text on accent CTA button (max contrast for readability) |
| **Email body text** | Off-white | `#E8ECE9` | Main copy |
| **Email muted text** | Grey-green | `#8B9A8F` | Footer, legal, timestamps |
| **Email divider** | Faint green | `#1E2B22` | Section separators |

### Rules

- Dark mode is the default and only mode. ShieldPulse never goes light, including in emails.
- The accent yellow-green `#a8ff60` is used sparingly — only for what deserves attention (CTAs, key numbers, active elements). If everything glows, nothing glows.
- Phosphor green `#00ff88` is reserved for success status states only. Never as a CTA, never as a brand color.
- Red `#FF4444` is reserved for things that are actually broken. Never decorative.
- Amber `#F59E0B` is for things that need watching but aren't broken yet. Warnings, aging backups, streaks.
- Background and surface create depth through subtle contrast, not shadows or gradients.

---

## 3. TYPOGRAPHY

### Font pairing

| Role | Font | Fallback | Weight |
|------|------|----------|--------|
| **Headlines** | **JetBrains Mono** | `"Fira Code", "Source Code Pro", monospace` | Bold (700) |
| **Body text** | **Inter** | `"Helvetica Neue", Arial, sans-serif` | Regular (400), Medium (500) |
| **Code / Data** | **JetBrains Mono** | `"Fira Code", monospace` | Regular (400) |

### Sizing scale

| Element | Size | Line height |
|---------|------|-------------|
| H1 (hero) | 48–56px | 1.1 |
| H2 (section) | 32–36px | 1.2 |
| H3 (subsection) | 22–24px | 1.3 |
| Body | 16–18px | 1.6 |
| Caption / Label | 13–14px | 1.4 |
| Code / Data | 14–15px | 1.5 |

### Email typography (added v2)

Many email clients don't load custom fonts. Use system stacks with monospace fallbacks.

| Role | Stack |
|------|-------|
| **Email headlines** | `'JetBrains Mono', 'SF Mono', Menlo, Consolas, monospace` |
| **Email body** | `-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, sans-serif` |
| **Email data/code** | `'JetBrains Mono', 'SF Mono', monospace` |

Inline all font-family declarations in the email HTML. Don't rely on external font loading.

### Rules

- Headlines are monospace. This reinforces the terminal/technical identity. Always.
- Body text is clean sans-serif (Inter) for readability.
- Numbers and data always use the monospace font — they're the product's language.
- No italic for emphasis. Use the accent yellow-green or bold instead.
- Keep headlines short. If it doesn't fit on one mental breath, cut it.

---

## 4. ICONS AND EMOJI CONVENTIONS (added v2)

### Status icons (UI and email)

Always paired with text label. Never icon alone.

| Symbol | Meaning | Context |
|--------|---------|---------|
| `▲` | Failure / Critical | Failed backup, payment failure, system error |
| `⚠` | Warning | Aging backup, needs review, configuration issue |
| `●` | Active / Live | Live activity indicator, online status, active session |
| `○` | Inactive / Pending | Pending check, scheduled task, paused state |
| `✓` | Success / Acknowledged | Completed check, acknowledged alert, resolved issue |
| `↗` | External link | Link to docs, external resource, external dashboard |
| `↻` | Refresh / Retry | Manual refresh action, retry trigger |

### Functional emojis (sparing use)

These are the only emojis allowed in product copy and emails. Each has a fixed meaning.

| Emoji | Meaning | Where |
|-------|---------|-------|
| 📝 | Note / Reminder | Note indicator on machines, customers, MorningBrief |
| 💡 | Suggestion / Wish | Feedback widget "Make a Wish" |
| 🐛 | Bug report | Feedback widget "Report a Bug" |
| ✨ | Feedback widget trigger | Floating bottom-right button |
| 🔒 | Security | Security settings, 2FA, sensitive actions |
| 📧 | Email-related | Email settings, invitation flow, notification preferences |

**Banned in product copy and emails:** 🚀, 🎉, 🎊, 💪, 🔥, 💯, ⭐, 🌟, 👀, 🤔, 🧠, ❤️, 👇, 👉, 🤝, 🎯, 💎, 💼, 📊, 📈, ⚡ (when not literal lightning), and all face/body emojis.

These create marketing-speak energy and break the technique-direct-minimal personality.

---

## 5. VOICE

### Tone description

ShieldPulse writes like a sharp, experienced MSP tech lead writing a Slack message — not a marketing department writing a brochure. The tone is confident, precise, and slightly irreverent. It respects the reader's intelligence and time.

### Mandatory humanizer skill compliance

**All written content for ShieldPulse — across landing page, app copy, emails, blog posts, social posts, sales pages — must comply with the humanizer skill rules.**

Humanizer enforces:
- Banned sentence structures (formulaic negation, false suspense, invented concept labels)
- Banned tone patterns (grandiose stakes, guru lecturing, motivational speaker energy)
- Banned word choices (~80 specific terms including "dive into", "leverage", "seamlessly", "robust", "groundbreaking")
- Banned formatting (em dashes as dramatic pauses, stacked parallel bullets, unnecessary adjectives)
- Positive writing rules (active voice, short paragraphs, varied rhythm, specific over vague)

Humanizer is the universal layer. This brand system is the ShieldPulse-specific layer on top.

**Reference:** Read `humanizer/SKILL.md` before writing any content. Run the 6-point post-writing check from humanizer Section 6 before publishing.

### ShieldPulse-specific overrides on humanizer

ShieldPulse has one stylistic exception to humanizer rules:

**Hero-line triplets are allowed.** Punchy three-beat sentences in hero positions (landing page hero, email subject lines, headline of major announcements) reinforce the terminal/CLI identity. Outside of hero positions, follow humanizer 5.4 strictly: vary sentence rhythm, no staccato.

Allowed in hero positions only:
- "Stop scanning dashboards. Start fixing problems."
- "From zero to monitoring in 5 minutes. Not a demo. Your actual stack."

Not allowed in body copy, email body paragraphs, blog posts, sales page sections.

### Do this

1. **Lead with the problem.** Start with what hurts, then show the fix. ("127 alerts. Only 12 actually matter.")
2. **Use real numbers.** Specifics build trust. Say "1,057 devices" not "thousands of devices". Say "in 5 minutes" not "quickly".
3. **Write short.** Short sentences mixed with longer ones. Let white space do the work. If a sentence has a comma, ask if it needs one.

### Don't do this

1. **Don't use buzzwords.** Apply humanizer Section 3 word bans strictly.
2. **Don't oversell.** Never say "the best" or "the only". Let the product speak. The reader is technical — they smell hype instantly.
3. **Don't soften.** No "we believe", "we think", "our mission is". Just say what it does. Directly.

### Example sentences (brand voice, humanizer-compliant)

Hero line (triplet allowed):
- "247 alerts roll into your inbox. 23 of them matter. We show you which."
- "From zero to monitoring in 5 minutes. Not a demo. Your actual stack."

Body copy (no staccato, varied rhythm):
- "We don't give you more data. We give you fewer decisions to make at 7am."
- "One price covers your entire stack. Add devices, add datacenters, add team members — pricing stays flat."

Email subject lines (concise, no marketing fluff):
- "Your backup check ran. 12 things need your attention."
- "Subscription confirmed. Your Sentinel dashboard is live."
- "Trial ends in 7 days."

---

## 6. VISUAL DIRECTION

### Aesthetic

The visual identity borrows from terminal interfaces, CLI tools, and monitoring dashboards. Think: dark IDE with green syntax highlighting. The aesthetic says "this is a tool built by engineers, for engineers."

### UI patterns

- **Dark panels with subtle borders** — cards float on the background with `#1E2B22` borders, not drop shadows.
- **Monospace data** — any number, metric, or alert count is rendered in JetBrains Mono.
- **Accent pulse** — the yellow-green `#a8ff60` appears in small, intentional doses: a glowing CTA, a highlighted number, an active tab. It's the "pulse" in ShieldPulse.
- **Grids and tables** — data is shown in clean grids. No pie charts, no fancy infographics. Tables with clear headers. The MSP audience reads dashboards all day — speak their language.

### Email patterns (added v2)

- **Single-column layout** — 600px max width, centered. Works in every client.
- **Solid color blocks for CTAs** — accent `#a8ff60` background with black text. Inline styles, no gradients.
- **Code-style data blocks** — when showing technical information (machine IDs, error codes, timestamps), wrap in a monospace box with `#141A16` background.
- **No images in email body** — except the ShieldPulse logo in header (and even that is optional). Text-only emails render fastest, look most credible to MSPs.
- **Footer with full company info** — legal, unsubscribe, contact. Minimal but complete.

### Imagery rules

- No stock photos. Ever. If an image is needed, use screenshots, terminal outputs, or abstract data visualisations.
- Icons are minimal, line-style, monochrome (white or muted grey). Only the accent yellow-green for active/important states.
- Illustrations (if any) are geometric, technical, low-detail. Think: network diagrams, not cartoon mascots.

### Accessibility

- All status indicators use shape and/or text in addition to colour. Never colour alone. A failure is red AND has a ▲ icon AND a "FAILURE" label. A warning is orange AND has a ⚠ badge.
- The product includes a colorblind theme. Visual design must remain clear when green and red are indistinguishable.
- Contrast ratios meet WCAG AA minimum on all text against dark backgrounds.
- Email content must be readable when images are blocked (default in many corporate email clients).

---

## 7. EMAIL COMPONENT LIBRARY (added v2)

Concrete reusable HTML snippets. Inline styles only — no `<style>` blocks, no external CSS. Tested for Gmail, Outlook, Apple Mail.

### 7.1 — Email shell (wrapper)

Every transactional email starts here. Replace `[CONTENT]` with the body components below.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ShieldPulse</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0B0F0D; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, sans-serif; color: #E8ECE9;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #0B0F0D;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #141A16; border: 1px solid #1E2B22;">
          <!-- Header -->
          <tr>
            <td style="padding: 32px 40px 24px 40px; border-bottom: 1px solid #1E2B22;">
              <span style="font-family: 'JetBrains Mono', 'SF Mono', Menlo, monospace; font-size: 18px; font-weight: 700; color: #a8ff60;">ShieldPulse</span>
            </td>
          </tr>
          <!-- Content -->
          <tr>
            <td style="padding: 32px 40px;">
              [CONTENT]
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding: 24px 40px; border-top: 1px solid #1E2B22; font-size: 13px; color: #8B9A8F;">
              <p style="margin: 0 0 8px 0;">ShieldPulse — shieldpulse.io</p>
              <p style="margin: 0 0 8px 0;">Reply to this email: contact@shieldpulse.io</p>
              <p style="margin: 0;"><a href="https://app.shieldpulse.io/settings/notifications" style="color: #8B9A8F; text-decoration: underline;">Manage notification preferences</a></p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```

### 7.2 — Headline

```html
<h1 style="margin: 0 0 16px 0; font-family: 'JetBrains Mono', 'SF Mono', Menlo, monospace; font-size: 24px; font-weight: 700; color: #E8ECE9; line-height: 1.3;">[HEADLINE]</h1>
```

### 7.3 — Body paragraph

```html
<p style="margin: 0 0 16px 0; font-size: 16px; line-height: 1.6; color: #E8ECE9;">[PARAGRAPH]</p>
```

### 7.4 — Primary CTA button

```html
<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin: 24px 0;">
  <tr>
    <td style="background-color: #a8ff60; padding: 14px 28px;">
      <a href="[URL]" style="display: inline-block; font-family: 'JetBrains Mono', 'SF Mono', Menlo, monospace; font-size: 15px; font-weight: 700; color: #000000; text-decoration: none;">[BUTTON_TEXT] →</a>
    </td>
  </tr>
</table>
```

### 7.5 — Data block (for technical info, IDs, codes)

```html
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 16px 0; background-color: #0B0F0D; border: 1px solid #1E2B22;">
  <tr>
    <td style="padding: 16px 20px; font-family: 'JetBrains Mono', 'SF Mono', Menlo, monospace; font-size: 14px; color: #E8ECE9;">
      [DATA_LINES]
    </td>
  </tr>
</table>
```

Each data line inside follows this pattern:

```html
<div style="margin-bottom: 8px;">
  <span style="color: #8B9A8F;">[LABEL]:</span> <span style="color: #E8ECE9;">[VALUE]</span>
</div>
```

### 7.6 — Status badge

For inline status indicators (success, warning, error).

Success:
```html
<span style="display: inline-block; padding: 4px 10px; background-color: #00ff8820; color: #00ff88; font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 700;">✓ ACTIVE</span>
```

Warning:
```html
<span style="display: inline-block; padding: 4px 10px; background-color: #F59E0B20; color: #F59E0B; font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 700;">⚠ WARNING</span>
```

Error:
```html
<span style="display: inline-block; padding: 4px 10px; background-color: #FF444420; color: #FF4444; font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 700;">▲ FAILED</span>
```

### 7.7 — Divider

```html
<hr style="border: none; border-top: 1px solid #1E2B22; margin: 24px 0;">
```

### 7.8 — Inline link

```html
<a href="[URL]" style="color: #a8ff60; text-decoration: underline;">[LINK_TEXT]</a>
```

---

## 8. CONTENT HANDLE AND EMAIL ADDRESSES

Always include **shieldpulse.io** on every piece of content.

Social handle format: **@shieldpulse** (where available).

### Email addresses

Transactional and product emails use two addresses with different purposes:

- **From (sender)**: `support@updates.shieldpulse.io` — authenticated sending subdomain with SPF, DKIM, DMARC configured. Mandatory for deliverability. Never send from the root domain `shieldpulse.io` directly, as this damages sender reputation.
- **Reply-To**: `contact@shieldpulse.io` — user replies land in the monitored primary inbox.
- **From name**: `ShieldPulse` (not "ShieldPulse Sentinel", not "ShieldPulse Team", not "The ShieldPulse Team")
- **Full header format**: `ShieldPulse <support@updates.shieldpulse.io>` with `reply_to` header explicitly set to `contact@shieldpulse.io`

### Code pattern for email sending

Every email in the codebase must follow this pattern when calling Resend:

```typescript
await resend.emails.send({
  from: 'ShieldPulse <support@updates.shieldpulse.io>',
  reply_to: 'contact@shieldpulse.io',
  to: [userEmail],
  subject: '...',
  html: '...',
});
```

A shared helper (e.g. `sendBrandedEmail()`) should inject these headers automatically so individual callers cannot forget or diverge.

---

## 9. QUICK REFERENCE (AI PROMPT CARD)

Copy-paste this block into any AI tool for on-brand content generation:

```
BRAND: ShieldPulse (shieldpulse.io)
DOES: Decision speed for MSP backup monitoring — shows the problems that actually matter.
REPLACES: Backup Radar, Acronis native dashboards.
STACK TODAY: Acronis Cyber Protect Cloud (production).
STACK ROADMAP: Veeam late 2026.
AUDIENCE: MSPs managing backup monitoring across client devices.
FEEL: Technique, direct, minimal. Terminal/hacker aesthetic.
COLOURS: Background #0B0F0D, Surface #141A16, Accent yellow-green #a8ff60, Success #00ff88, Warning #F59E0B, Error #FF4444, Info #4A9EFF, Text #E8ECE9, Muted #8B9A8F
FONTS: JetBrains Mono (headlines, data), Inter (body text). For email: system stack fallbacks.
ICONS: ▲ failure, ⚠ warning, ● active, ○ pending, ✓ success, ↗ external link.
EMOJIS ALLOWED: 📝 note, 💡 wish, 🐛 bug, ✨ feedback, 🔒 security, 📧 email.
EMOJIS BANNED: 🚀 🎉 🔥 💯 ⭐ 🎯 💎 and all face/body emojis.
VOICE: Short. Specific. Lead with problem. Use real numbers. No buzzwords. No softeners.
HUMANIZER: Mandatory compliance with humanizer skill (banned structures, banned words, post-writing 6-check).
HERO TRIPLET EXCEPTION: Three-beat punchy sentences allowed in hero/subject positions only. Not in body copy.
EXAMPLES: "127 alerts. Only 12 actually matter." / "From zero to monitoring in 5 minutes." / "Stop scanning dashboards."
ACCESSIBILITY: Never use colour alone for status. Always pair with shape/text. Colorblind-safe design.
EMAIL FROM: ShieldPulse <support@updates.shieldpulse.io>
EMAIL REPLY-TO: contact@shieldpulse.io
EMAIL FROM NAME: ShieldPulse (never "ShieldPulse Team" or "ShieldPulse Sentinel")
NEVER: Stock photos, light mode, italic emphasis, marketing speak, pie charts, em dashes for drama, banned humanizer words, sending from root shieldpulse.io domain.
```

---

## 10. CHANGELOG

**v2.1 — April 2026 (patch)**
- Fixed email sender vs reply-to confusion in section 8 and 9: From must be `support@updates.shieldpulse.io` (authenticated sending subdomain, SPF/DKIM/DMARC), Reply-To must be `contact@shieldpulse.io` (monitored inbox)
- Updated email component library footer (section 7.1) to reflect reply-to guidance
- Added explicit code pattern for Resend sending in section 8

**v2 — April 2026**
- Accent color realigned: `#3CFF6F` (deprecated) → `#a8ff60` yellow-green (matches K4 Decision 166)
- Status success split out: `#00ff88` phosphor green for success states only, distinct from accent
- Veeam status calibrated: removed "coming soon", replaced with explicit roadmap timing
- Added secondary palette for data visualization (score gauges, streaks, hover states)
- Added email-specific palette and typography stack
- Formalized icon and emoji conventions (allowlist + banlist)
- Integrated humanizer skill as mandatory voice layer with documented hero-triplet exception
- Added section 7: Email Component Library (8 reusable HTML snippets, inline styles, email-client-safe)

**v1 — Original**
- Initial brand system

---

*Built for ShieldPulse.io — v2.1 April 2026*
