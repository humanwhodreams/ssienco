import { Article } from '@/components/article/article';
import { GoBackButton } from '@/components/go-back.button';
import { Section } from '@/components/ui/section';
import { Suspense } from 'react';
import { getContentData } from '@/lib/markdown/articles';

interface Props {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: Props) {
  const data = await getContentData(params.slug);
  return (
    <>
      <div className="flex flex-row items-center justify-between px-4 mt-12 lg:px-0">
        <GoBackButton />
        <small>{data.date}</small>
      </div>
      <Section>
        <Suspense
          key={data.id}
          fallback={<p className="muted">fetching article...</p>}
        >
          <Article dangerouslySetInnerHTML={{ __html: data.content }} />
        </Suspense>
      </Section>
    </>
  );
}
