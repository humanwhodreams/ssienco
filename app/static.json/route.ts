import { NextResponse } from 'next/server';
import type { StructuredData } from 'fumadocs-core/mdx-plugins';
import { blog } from '@/app/source';

export const revalidate = false;

interface DocumentRecord {
  _id: string;
  tag: string;
  url: string;
  title: string;
  description: string | undefined;
  structured: StructuredData;
}

export function GET(): Response {
  let results: Array<DocumentRecord> = [];
  const pages = blog.getPages();

  for (const page of pages) {
    results.push({
      _id: page.url,
      tag: page.slugs[0],
      url: page.url,
      title: page.data.title,
      description: page.data.description,
      structured: page.data.structuredData,
    });
  }

  return NextResponse.json(results);
}
