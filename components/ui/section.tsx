import * as React from 'react';

import { cn } from '@/lib/cn';

export function Section({
  id,
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      id={id}
      className={cn('max-w-4xl mx-auto py-12 px-4 lg:px-0', className)}
      {...props}
    >
      {children}
    </section>
  );
}
