'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import type { BlogPost } from '@/lib/blog';
import { betaHref } from '@/lib/beta';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function ArticleLayout({
  post,
  html,
  toc,
}: {
  post: BlogPost;
  html: string;
  toc: TocItem[];
}) {
  const [tocOpen, setTocOpen] = useState(false);

  return (
    <main className="min-h-screen bg-bg-primary">
      {/* Breadcrumbs + header */}
      <section className="pt-28 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="text-sm text-text-muted mb-8 flex items-center gap-2 flex-wrap"
          >
            <Link
              href="/"
              className="hover:text-text-secondary transition-colors"
            >
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              href="/blog"
              className="hover:text-text-secondary transition-colors"
            >
              Blog
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-text-secondary truncate max-w-[260px]">
              {post.title}
            </span>
          </nav>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-3xl md:text-4xl font-bold text-text-primary leading-tight mb-4"
          >
            {post.title}
          </motion.h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-text-muted mb-4">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true">&middot;</span>
            <span>{post.readingTime} min read</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="text-xs font-mono px-2 py-0.5 rounded bg-bg-elevated text-text-muted border border-border"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Body + sidebar */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* Mobile TOC */}
          {toc.length > 0 && (
            <div className="lg:hidden border border-border rounded-lg bg-bg-surface">
              <button
                onClick={() => setTocOpen(o => !o)}
                className="w-full px-4 py-3 flex items-center justify-between text-sm font-mono text-text-secondary"
              >
                <span>Table of contents</span>
                <span
                  className={`transition-transform duration-200 ${
                    tocOpen ? 'rotate-180' : ''
                  }`}
                >
                  &#9660;
                </span>
              </button>
              {tocOpen && (
                <ul className="px-4 pb-4 space-y-1">
                  {toc.map(item => (
                    <li
                      key={item.id}
                      style={{ paddingLeft: item.level === 3 ? '1rem' : 0 }}
                    >
                      <a
                        href={`#${item.id}`}
                        onClick={() => setTocOpen(false)}
                        className="text-sm text-text-muted hover:text-accent-green transition-colors"
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Article */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="prose-dark max-w-3xl flex-1 min-w-0"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {/* Desktop sidebar TOC */}
          {toc.length > 0 && (
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-24">
                <h4 className="font-mono text-xs uppercase tracking-wider text-text-muted mb-3">
                  On this page
                </h4>
                <ul className="space-y-1 border-l border-border pl-4">
                  {toc.map(item => (
                    <li
                      key={item.id}
                      style={{ paddingLeft: item.level === 3 ? '0.75rem' : 0 }}
                    >
                      <a
                        href={`#${item.id}`}
                        className="text-sm text-text-muted hover:text-accent-green transition-colors leading-snug block py-0.5"
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-xl border border-accent-green/30 bg-bg-surface p-8 text-center">
            <h3 className="font-mono text-xl font-bold text-text-primary mb-2">
              Ready to eliminate alert fatigue?
            </h3>
            <p className="text-text-secondary mb-6 max-w-lg mx-auto">
              Try Sentinel free for 21 days. Full access, no credit card required.
            </p>
            <a
              href={betaHref('https://app.shieldpulse.io')}
              className="inline-block font-medium bg-accent-green text-bg-primary px-6 py-3 rounded-lg glow-green hover:brightness-110 transition-all"
            >
              Start 21-day trial &rarr;
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
