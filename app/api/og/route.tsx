import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const font = await fetch(
      new URL('../../../public/fonts/GeistVF.woff', import.meta.url)
    ).then((res) => res.arrayBuffer());

    const { searchParams } = req.nextUrl;

    const title = searchParams.get('title');

    if (!title) {
      return new Response('Missing title on post.', { status: 500 });
    }

    const heading = title.length > 140 ? `${title.substring(0, 140)}` : title;

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            color: 'white',
            backgroundColor: '#0c0c0c',
            backgroundImage: `linear-gradient(to right top, rgba(255,150,255,0.5), transparent)`,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              height: '100%',
              padding: '4rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '12px',
                color: 'rgb(255,150,255)',
              }}
            >
              <p
                style={{
                  fontSize: '56px',
                  fontWeight: 600,
                }}
              >
                SSIENCO
              </p>
            </div>
            <p
              style={{
                fontWeight: 800,
                fontSize: '82px',
              }}
            >
              {heading}
            </p>
          </div>
        </div>
      ),
      {
        fonts: [
          {
            name: 'Inter',
            data: font,
            weight: 400,
          },
          {
            name: 'Inter',
            data: font,
            weight: 600,
          },
        ],
      }
    );
  } catch (error) {
    return new Response(
      `Failed to generate opengraph image. Error log => ${error}`,
      { status: 500 }
    );
  }
}
