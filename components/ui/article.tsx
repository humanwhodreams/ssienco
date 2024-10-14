import { Tab, Tabs } from 'fumadocs-ui/components/tabs';

import Avatar from 'boring-avatars';
import { CalendarDaysIcon } from 'lucide-react';
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
    <article
      className={cn([
        'flex-1 min-w-0 max-w-5xl p-4 prose',
        '[&>p>a]:text-tertiary [&>p>a]:no-underline',
        'hover:[&>p>a]:underline hover:[&>p>a]:decoration-tertiary',
      ])}
    >
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
      {/* <div>
        <p className="[&:not(:first-child)]:mt-0 mb-1 text-muted-foreground">
          On this page
        </p>
      </div> */}
      <div>
        <p className="[&:not(:first-child)]:mt-0 mb-1 text-muted-foreground">
          Authors
        </p>
        {Array.isArray(content.data.author) ? (
          <>
            {content.data.author.map((author, idx) => (
              <p
                key={idx}
                className="[&:not(:first-child)]:mt-0 mb-2 inline-flex items-center justify-center font-medium leading-none"
              >
                <Avatar
                  size={24}
                  name={author}
                  className="mr-2"
                  colors={[
                    '#bee9e8',
                    '#62b6cb',
                    '#1b4965',
                    '#cae9ff',
                    '#5fa8d3',
                  ]}
                />
                {author}
              </p>
            ))}
          </>
        ) : (
          <p className="[&:not(:first-child)]:mt-0 inline-flex items-center justify-center font-medium leading-none">
            <Avatar
              size={24}
              name={content.data.author}
              className="mr-2"
              colors={['#bee9e8', '#62b6cb', '#1b4965', '#cae9ff', '#5fa8d3']}
            />
            {content.data.author}
          </p>
        )}
      </div>
      <div>
        <p className="[&:not(:first-child)]:mt-0 mb-1 muted">Published</p>
        <p className="[&:not(:first-child)]:mt-0 font-medium leading-none inline-flex items-center justify-center">
          <CalendarDaysIcon className="flex-shrink-0 mr-2 size-5 text-muted-foreground" />
          {new Date(content.data.date ?? content.file.name).toDateString()}
        </p>
      </div>
    </aside>
  );
}
Article.Aside = Aside;
