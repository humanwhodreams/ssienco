import { Tab, Tabs } from 'fumadocs-ui/components/tabs';

import Image from 'next/image';
import Link from 'next/link';
import { blog } from '@/app/source';
import { cn } from '@/lib/cn';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { focusRing } from '@/lib/focuses';

interface Props {
  content: ReturnType<typeof blog.getPage>;
}

export function Article({ content }: Props) {
  if (content === undefined) return <span>Content cannot be undefined.</span>;

  return (
    <article className={cn('flex-1 min-w-0 max-w-5xl p-4 prose')}>
      <content.data.body
        components={{
          ...defaultMdxComponents,
          Image,
          Tab,
          Tabs,
          a: ({ children, href }) => (
            <Link
              href={href as string}
              rel="noreferrer noopener"
              target="_blank"
              className={cn(
                'rounded-md underline decoration-tertiary',
                focusRing
              )}
            >
              {children}
            </Link>
          ),
        }}
      />
    </article>
  );
}
