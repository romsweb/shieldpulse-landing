import type { Metadata } from 'next';
import { marked } from 'marked';
import { getAllSlugs, getPostBySlug } from '@/lib/blog';
import { notFound } from 'next/navigation';
import ArticleLayout from './article-layout';

// --------------- static params ---------------
export function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }));
}

// --------------- metadata ---------------
type MetadataProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — ShieldPulse Sentinel`,
    description: post.description,
    alternates: { canonical: `https://shieldpulse.io/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `https://shieldpulse.io/blog/${slug}`,
      images: [
        {
          url: 'https://shieldpulse.io/og-image.png',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: ['https://shieldpulse.io/og-image.png'],
    },
  };
}

// --------------- helpers ---------------
interface TocItem {
  id: string;
  text: string;
  level: number;
}

function extractToc(html: string): TocItem[] {
  const regex = /<h([23])\s+id="([^"]*)"[^>]*>(.*?)<\/h[23]>/gi;
  const items: TocItem[] = [];
  let match;
  while ((match = regex.exec(html)) !== null) {
    items.push({
      level: parseInt(match[1], 10),
      id: match[2],
      text: match[3].replace(/<[^>]+>/g, ''),
    });
  }
  return items;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/<[^>]+>/g, '')
    .replace(/[^\w]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// --------------- page ---------------
type PageProps = { params: Promise<{ slug: string }> };

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  // Configure marked to add ids to headings
  const renderer = new marked.Renderer();
  renderer.heading = ({ text, depth }: { text: string; depth: number }) => {
    const id = slugify(text);
    return `<h${depth} id="${id}">${text}</h${depth}>`;
  };

  const html = await marked(post.content, { renderer });
  const toc = extractToc(html);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'ShieldPulse' },
    publisher: {
      '@type': 'Organization',
      name: 'ShieldPulse',
      url: 'https://shieldpulse.io',
    },
    mainEntityOfPage: `https://shieldpulse.io/blog/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleLayout post={post} html={html} toc={toc} />
    </>
  );
}
