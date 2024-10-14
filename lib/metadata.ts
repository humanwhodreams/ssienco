import type { Metadata } from 'next';

export const overrideMetadata = (override: Metadata): Metadata => {
  return {
    ...override,
    title: override.title ?? 'Blog',
    description:
      override.description ??
      'Ready made blog site for everyone, powered by Markdown.',
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: 'https://ssienco.vercel.app',
      siteName: 'Ssienco',
      ...override.openGraph,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@humanwhodreams',
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      ...override.twitter,
    },
  };
};

export const baseUrl =
  process.env.NODE_ENV === 'development' || !process.env.VERCEL_URL
    ? new URL('http://localhost:3000')
    : new URL(`https://${process.env.VERCEL_URL}`);

