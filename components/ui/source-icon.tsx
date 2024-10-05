import type { LucideIcon } from 'lucide-react';
import { TerminalIcon } from 'lucide-react';
import { type HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

export function SourceIcon({
  icon: Icon,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  icon?: LucideIcon;
}): React.ReactElement {
  return (
    <div
      {...props}
      className={cn(
        'rounded-md border bg-gradient-to-b from-secondary p-1 shadow-sm',
        props.className
      )}
    >
      {Icon ? <Icon /> : <TerminalIcon />}
    </div>
  );
}
