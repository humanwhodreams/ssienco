import { readFileSync } from 'node:fs';
import { ImageResponse } from 'next/og';
import { type NextRequest } from 'next/server';
import { blog } from '@/app/source';
import { ReactElement } from 'react';

const font = readFileSync('./app/og/[...slug]/inter-regular.ttf');
const fontBold = readFileSync('./app/og/[...slug]/inter-bold.ttf');

export async function GET(
  req: NextRequest,
  params: Promise<{ params: { slug: string } }>
) {
  const param = (await params).params;

  if (!param.slug)
    return new Response('Missing opengraph "slug" at URL.', { status: 500 });

  const page = blog.getPage([param.slug]);

  if (!page?.data)
    return new Response(
      'Invalid page data, please check slug to be on the right post.',
      { status: 500 }
    );

  return new ImageResponse(
    OGImage({
      title: page.data.title,
      description: page.data.description,
      authors: page.data.author,
      published: page.data.date,
      category: page.data.category,
    }),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: font,
          weight: 400,
        },
        {
          name: 'InterBold',
          data: fontBold,
          weight: 600,
        },
      ],
    }
  );
}

interface Props {
  title: string;
  description: string | undefined;
  authors: string | string[];
  published: string | Date | undefined;
  category: string;
}

function OGImage({
  authors,
  description,
  published,
  title,
  category,
}: Props): ReactElement {
  return (
    <div tw="flex flex-col w-full h-full items-center justify-between bg-white">
      <div tw="w-full flex flex-row items-center justify-between px-4 h-11">
        <a href="#" tw="font-bold text-blue-500">
          SSIENCO
        </a>
        <p tw="text-sm text-gray-400 my-0 leading-none">
          Ready made markdown blogging site for your projects, made for
          everyone.
        </p>
      </div>
      <div tw="flex-1 mt-12 w-full px-4 flex flex-col items-start">
        <a href="#" tw="text-sm text-gray-500">
          Blog &gt; {category}
        </a>
        <h1 tw="text-5xl mb-0">{title}</h1>
        <p tw="text-2xl text-gray-600 max-w-5xl text-wrap">{description}</p>
      </div>
      <div tw="w-full flex flex-row items-center justify-between px-4 h-11">
        <div tw="flex items-center flex-row">
          {Array.isArray(authors) ? (
            <>
              {authors.map((author, idx) => (
                <a
                  key={idx}
                  href="https://ssienco.vercel.app/blog"
                  tw="text-sm text-gray-500 mr-4"
                >
                  {author}
                </a>
              ))}
            </>
          ) : (
            <a
              href="https://ssienco.vercel.app/blog"
              tw="text-sm text-gray-500"
            >
              {authors}
            </a>
          )}
        </div>
        <p tw="text-sm text-blue-500">
          {new Date(published as string | Date).toDateString()}
        </p>
      </div>
    </div>
  );
}
