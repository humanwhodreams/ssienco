'use client';

import { Brand } from '@/components/ui/brand';
import Link from 'next/link';
import { ThemeToggleV2 } from './theme-toggle-v2';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/cn';
import { useWindowScroll } from '@/hooks/use-window-scroll';

interface Props {
  className?: string;
}

type Navlink = {
  label: string;
  href: string;
};

const NAV_LINKS: Navlink[] = [
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Resources',
    href: '/resources',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export function Header({ className }: Props) {
  const { scroll } = useWindowScroll(30);

  return (
    <header className={cn('sticky inset-x-0 top-0', className)}>
      <nav
        className={cn(
          'flex items-center justify-between px-4 h-11 z-50 transition-colors bg-background',
          scroll ? 'border-b shadow-sm bg-background/50 backdrop-blur-xl' : 'border-b-0'
        )}
      >
        <Brand />

        <ul className="hidden lg:flex lg:items-center lg:gap-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={buttonVariants({
                  variant: 'ghost',
                  size: 'xxs',
                  className: 'text-base',
                })}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <ThemeToggleV2 />
          </li>
        </ul>
      </nav>
    </header>
  );
}
