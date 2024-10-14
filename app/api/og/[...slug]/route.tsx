import { generateOGImage } from '@/app/api/og/[...slug]/og';
import { type ImageResponse } from 'next/og';
import { readFileSync } from 'node:fs';
import { metadataImage } from '@/lib/metadata';

const font = readFileSync('../../../../public/fonts/GeistVF.woff');

export async function GET() {
  return metadataImage.createAPI((page): ImageResponse => {
    return generateOGImage({
      primaryTextColor: 'rgb(240,240,240)',
      primaryColor: 'rgba(65,65,84,0.9)',
      title: page.data.title,
      description: page.data.description,
      site: 'Ssienco',
      fonts: [
        {
          name: 'Geist',
          data: font,
          weight: 400,
        },
        {
          name: 'Geist',
          data: font,
          weight: 600,
        },
      ],
    });
  });
}

export function generateStaticParams(): {
  slug: string[];
}[] {
  return metadataImage.generateParams();
}
