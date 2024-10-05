import * as React from 'react';

import { Header } from '@/components/header';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header className="w-full" />
      <main className="flex-1 container max-sm:px-0 md:py-12">{children}</main>
    </>
  );
}
