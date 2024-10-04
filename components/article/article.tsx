import * as React from 'react';

import { cn } from '@/lib/cn';

interface Props {
  dangerouslySetInnerHTML: {
    __html: string | TrustedHTML;
  };
}

export function Article({ dangerouslySetInnerHTML }: Props) {
  return (
    <article
      className={cn(
        'flex flex-col gap-2 mb-20 text-lg tracking-wide',
        '[&>h1]:text-center',
        '[&>h2]:mt-6',
        '[&>ul]:my-6 [&>ul]:ml-6 [&>ul]:list-disc [&>li]:mt-2',
        '[&>ol]:my-6 [&>ol]:ml-6 [&>ol]:list-decimal [&>li]:mt-2',
        '[&>p>img]:overflow-hidden [&>p>img]:rounded-lg [&>p>img]:object-cover',
        '[&>pre]:bg-muted [&>pre]:text-muted-foreground [&>pre]:p-5 [&>pre]:overflow-scroll'
      )}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    ></article>
  );
}
