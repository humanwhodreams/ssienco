import '@/style/globals.css';

import { geistMono, geistSans } from '@/lib/font';

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
          'font-geist-sans antialiased',
          geistSans.variable,
          geistMono.variable
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
