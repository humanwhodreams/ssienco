import * as React from 'react';

import Link from 'next/link';
import { cn } from '@/lib/cn';
import { focusRing } from '@/lib/focuses';

interface Props {
  href?: `/${string}`;
}

export function Brand({ href }: Props) {
  return (
    <Link
      href={href || '/'}
      className={cn('text-2xl font-semibold lg:px-3 py-px rounded-md', focusRing)}
    >
      Minimal Blog
    </Link>
  );
}
