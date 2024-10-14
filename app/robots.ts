import type { MetadataRoute } from 'next';
import { baseUrl } from '@/lib/metadata';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/blog', '/contact', '/resources', '/about'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: `${baseUrl}`,
  };
}
