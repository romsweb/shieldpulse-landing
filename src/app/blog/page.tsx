import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog';
import BlogList from './blog-list';

export const metadata: Metadata = {
  title: 'Blog — ShieldPulse Sentinel',
  description:
    'Insights on backup monitoring, MSP operations, and alert intelligence from the team behind ShieldPulse Sentinel.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-bg-primary">
      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-mono text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Blog
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Insights on backup monitoring, MSP operations, and alert
            intelligence.
          </p>
        </div>
      </section>

      {/* Post grid */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <BlogList posts={posts} />
        </div>
      </section>
    </main>
  );
}
