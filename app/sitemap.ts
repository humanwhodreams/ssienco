import type { MetadataRoute } from 'next';
import { baseUrl } from '@/lib/metadata';
import { blog } from './source';

export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => new URL(path, baseUrl).toString();

  return [
    {
      url: url('/'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: url('/blog'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...blog.getPages().map<MetadataRoute.Sitemap[number]>((page) => ({
      url: url(page.url),
      lastModified: page.data.lastModified
        ? new Date(page.data.lastModified)
        : undefined,
      changeFrequency: 'weekly',
      priority: 0.5,
    })),
  ];
}
