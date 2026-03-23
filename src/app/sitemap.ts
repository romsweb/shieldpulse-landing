import type { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://shieldpulse.io';

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // Blog posts — dynamically read from content/blog/
  const blogDir = path.join(process.cwd(), 'content', 'blog');
  let blogPages: MetadataRoute.Sitemap = [];

  try {
    const files = fs.readdirSync(blogDir).filter((f) => f.endsWith('.md'));
    blogPages = files.map((file) => {
      const slug = file.replace(/\.md$/, '');
      const stat = fs.statSync(path.join(blogDir, file));
      return {
        url: `${baseUrl}/blog/${slug}`,
        lastModified: stat.mtime,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      };
    });
  } catch {
    // content/blog not found — skip
  }

  return [...staticPages, ...blogPages];
}
