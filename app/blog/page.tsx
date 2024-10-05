import * as React from 'react';

import Link from 'next/link';
import { blog } from '@/app/source';
import { cn } from '@/lib/cn';
import { focusRing } from '@/lib/focuses';

type Blog = typeof blog;

function getData(content: Blog) {
  return [...content.getPages()].sort(
    (a, b) =>
      new Date(b.data.date ?? b.file.name).getTime() -
      new Date(a.data.date ?? a.file.name).getTime()
  );
}

export default function Page() {
  const data = getData(blog);

  return (
    <>
      <section className="h-[300px] p-8 md:h-[400px] md:p-12 border">
        <h1>Blog</h1>
        <p className="text-xl">Light and gorgeous. like the moon</p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {data.map((post) => (
          <React.Fragment key={post.url}>
            {post.data.published ? (
              <Link
                href={post.url}
                className={cn(
                  'flex flex-col p-4 transition-colors border border-t-0 bg-card hover:bg-accent hover:text-accent-foreground focus-visible:ring-offset-0',
                  focusRing
                )}
              >
                <p className="font-medium">{post.data.title}</p>
                <p className="muted line-clamp-2">{post.data.description}</p>

                <p className="pt-4 mt-auto text-xs text-muted-foreground">
                  {new Date(post.data.date ?? post.file.name).toDateString()}
                </p>
              </Link>
            ) : null}
          </React.Fragment>
        ))}
      </section>
    </>
  );
}
