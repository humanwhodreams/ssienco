import * as React from 'react';

import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/cn';

interface Props {
  href: string;
  children: React.ReactNode;
}

export function BackButton({ href, children }: Props) {
  return (
    <Link
      href={href || '#'}
      className={cn(buttonVariants({ variant: 'ghost', size: 'xs' }))}
    >
      <ArrowLeftIcon className='flex-shrink-0 mr-2 text-current size-4' />
      {children}
    </Link>
  );
}
