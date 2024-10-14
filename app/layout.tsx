import '@/style/globals.css';

import type { Metadata, Viewport } from 'next';
import { baseUrl, overrideMetadata } from '@/lib/metadata';
import { geistMono, geistSans } from '@/lib/font';

import { Providers } from '@/components/providers';
import { cn } from '@/lib/cn';

export const metadata: Metadata = overrideMetadata({
  title: {
    template: '%s | Ssienco',
    default: 'Ssienco',
  },
  description:
    'Ready made blog site for everyone, powered by Markdown.',
  metadataBase: baseUrl,
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
    { media: '(prefers-color-scheme: light)', color: '#fff' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'relative font-geist-sans antialiased',
          'flex flex-col min-h-screen',
          geistSans.variable,
          geistMono.variable
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
