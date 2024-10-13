import { Article } from '@/components/ui/article';
import { BackButton } from '@/components/back-button';
import type { Metadata } from 'next';
import { blog } from '@/app/source';
import { notFound } from 'next/navigation';
import { overrideMetadata } from '@/lib/metadata';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: Props) {
  const param = await params;
  const page = blog.getPage([param.slug]);

  if (!page) notFound();

  return (
    <>
      <section className="container py-12 md:px-8">
        <BackButton href="/blog">Go back to blog</BackButton>
        <h1 className="mt-8 md:max-w-5xl">{page.data.title}</h1>
        <p className="lead md:max-w-6xl">{page.data.description}</p>
      </section>
      <section className="container flex flex-col px-0 py-8 lg:flex-row lg:items-start lg:px-4">
        <Article content={page} />
        <Article.Aside content={page} />
      </section>
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}): Promise<Metadata> {
  const param = await params;
  const page = blog.getPage([param.slug]);

  if (!page) notFound();

  return overrideMetadata({
    title: {
      absolute: page.data.title
    },
    description:
      page.data.description ??
      'The blogging template built with Fumadocs and Next.js.',
  });
}

export function generateStaticParams(): { slug: string }[] {
  return blog.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}
