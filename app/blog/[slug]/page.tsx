import { Article } from '@/components/ui/article';
import { BackButton } from '@/components/back-button';
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
        <BackButton href="/blog">Go back to blogs</BackButton>
        <h1 className="mt-8 md:max-w-5xl">{page.data.title}</h1>
        <p className="lead">{page.data.description}</p>
      </section>
      <section className="container flex flex-col px-0 py-8 lg:flex-row lg:items-start lg:px-4">
      </section>
    </>
  );
}
