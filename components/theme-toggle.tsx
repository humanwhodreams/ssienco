'use client';

import { MonitorIcon, MoonIcon, SunDimIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="inline-flex">
      <Button
        type="button"
        variant={theme === 'light' ? 'primary' : 'ghost'}
        size={'icon-xs'}
        className='border rounded-e-none'
        onClick={() => setTheme('light')}
      >
        <SunDimIcon className="size-4 text-current fill-current" />
      </Button>
      <Button
        type="button"
        variant={theme === 'dark' ? 'primary' : 'ghost'}
        size={'icon-xs'}
        className='border border-x-0 rounded-s-none rounded-e-none'
        onClick={() => setTheme('dark')}
      >
        <MoonIcon className="size-4 text-current fill-current" />
      </Button>
      <Button
        type="button"
        variant={theme === 'system' ? 'primary' : 'ghost'}
        size={'icon-xs'}
        className='border rounded-s-none'
        onClick={() => setTheme('system')}
      >
        <MonitorIcon className="size-4 text-current" />
      </Button>
    </div>
  );
}
