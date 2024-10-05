import '@/style/globals.css';

import { cormorantGaramond, geistMono, geistSans } from '@/lib/font';

import type { Metadata } from 'next';
import { Providers } from '@/components/providers';
import { cn } from '@/lib/cn';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata();

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
          cormorantGaramond.variable,
          geistSans.variable,
          geistMono.variable
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
