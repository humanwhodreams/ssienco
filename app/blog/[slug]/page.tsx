import { ArrowLeftIcon } from 'lucide-react';
import { Article } from '@/components/ui/article';
import Link from 'next/link';
import React from 'react';
import { blog } from '@/app/source';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/cn';
import { notFound } from 'next/navigation';

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
        <Link
          href={'/blog'}
          className={cn(buttonVariants({ variant: 'ghost', size: 'sm', className: 'mb-8' }))}
        >
          <ArrowLeftIcon className="flex-shrink-0 mr-2 size-4 text-muted-foreground" />
          Go back to blog
        </Link>
        <h1 className="md:max-w-5xl">{data.data.title}</h1>
        <p className="lead">{data.data.description}</p>
      </section>
      <section className="container flex flex-col px-0 py-8 lg:flex-row lg:items-start lg:px-4">
        <React.Suspense fallback={<p>loading post...</p>}>
          <Article content={data} />
        </React.Suspense>
        <aside className="flex flex-col gap-4 border-l p-4 text-sm lg:w-[250px] lg:sticky lg:top-11">
          <div>
            <p className="[&:not(:first-child)]:mt-0 mb-1 text-muted-foreground">
              Written by
            </p>
            <p className="[&:not(:first-child)]:mt-0 font-medium leading-none">
              {data.data.author}
            </p>
          </div>
          <div>
            <p className="[&:not(:first-child)]:mt-0 mb-1 muted">At</p>
            <p className="[&:not(:first-child)]:mt-0 font-medium leading-none">
              {new Date(data.data.date ?? data.file.name).toDateString()}
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
