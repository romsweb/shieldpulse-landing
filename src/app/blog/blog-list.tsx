'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { BlogPost } from '@/lib/blog';

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {posts.map((post, i) => (
        <motion.div
          key={post.slug}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <Link
            href={`/blog/${post.slug}`}
            className="block h-full rounded-xl border border-border bg-bg-surface p-6 transition-all duration-200 hover:border-accent-green/40 hover:bg-bg-elevated"
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.slice(0, 3).map(tag => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2 py-0.5 rounded bg-bg-elevated text-text-muted border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h2 className="font-mono text-lg font-semibold text-text-primary mb-2 leading-snug">
              {post.title}
            </h2>

            {/* Description */}
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              {post.description}
            </p>

            {/* Meta */}
            <div className="flex items-center gap-3 text-xs text-text-muted">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden="true">&middot;</span>
              <span>{post.readingTime} min read</span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
