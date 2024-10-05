import * as React from 'react';

import { RootProvider } from 'fumadocs-ui/provider';
import { ThemeProvider } from '@/components/providers/theme';

interface Props {
  children: React.ReactNode;
}

export function Providers({ children }: Props) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <RootProvider theme={{ enabled: true }}>{children}</RootProvider>
    </ThemeProvider>
  );
}
