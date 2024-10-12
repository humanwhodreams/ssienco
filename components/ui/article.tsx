import { Tab, Tabs } from 'fumadocs-ui/components/tabs';

import Image from 'next/image';
import { blog } from '@/app/source';
import { cn } from '@/lib/cn';
import defaultMdxComponents from 'fumadocs-ui/mdx';

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
        }}
      />
    </article>
  );
}

function Aside({ content }: { content: ReturnType<typeof blog.getPage> }) {
  if (content === undefined) return <span>Content cannot be undefined.</span>;

  return (
    <aside className="flex flex-col gap-4 border-l p-4 text-sm lg:w-[250px] lg:sticky lg:top-11">
      <div>
        <p className="[&:not(:first-child)]:mt-0 mb-1 text-muted-foreground">
          Written by
        </p>
        <p className="[&:not(:first-child)]:mt-0 font-medium leading-none">
          🪶{content.data.author}
        </p>
      </div>
      <div>
        <p className="[&:not(:first-child)]:mt-0 mb-1 muted">At</p>
        <p className="[&:not(:first-child)]:mt-0 font-medium leading-none">
          📅{new Date(content.data.date ?? content.file.name).toDateString()}
        </p>
      </div>
    </aside>
  );
}
Article.Aside = Aside;