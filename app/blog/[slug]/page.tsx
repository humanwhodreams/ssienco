import * as React from 'react';

import { InlineTOC } from 'fumadocs-ui/components/inline-toc';
import { blog } from '@/app/source';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { notFound } from 'next/navigation';
import Image from 'next/image';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: Props) {
  const param = await params;
  const data = blog.getPage([param.slug]);

  if (!data) notFound();

  return (
    <>
      <section className="container py-12 md:px-8">
        <h1>{data.data.title}</h1>
        <p className="lead">{data.data.description}</p>
      </section>
      <section className="container flex flex-col px-0 py-8 lg:flex-row lg:items-start lg:px-4">
        <article className="flex-1 min-w-0 p-4 prose">
          <InlineTOC items={data.data.toc} />
          <data.data.body components={{ ...defaultMdxComponents, Image }} />
        </article>
        <aside className="flex flex-col gap-4 border-l p-4 text-sm lg:w-[250px]">
          <div>
            <div className="mb-1 text-muted-foreground">Written by</div>
            <div className="font-medium">{data.data.author}</div>
          </div>
          <div>
            <div className="mb-1 muted">At</div>
            <div className="font-medium">
              {new Date(data.data.date ?? data.file.name).toDateString()}
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
