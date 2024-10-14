import type { ReactElement, ReactNode } from 'react';

import { ImageResponse } from 'next/og';
import type { ImageResponseOptions } from 'next/dist/compiled/@vercel/og/types';

interface Props {
  title: ReactNode;
  description?: ReactNode;
  primaryColor?: string;
  primaryTextColor?: string;
  site?: ReactNode;
}

const IMAGE_SIZE = {
  width: 1200,
  height: 630,
};

export function generateOGImage(
  options: Props & ImageResponseOptions
): ImageResponse {
  const {
    title,
    description,
    primaryColor,
    primaryTextColor,
    site,
    ...option
  } = options;
  return new ImageResponse(
    OGImage({
      title,
      description,
      primaryColor,
      primaryTextColor,
      site,
    }),
    {
      width: IMAGE_SIZE.width,
      height: IMAGE_SIZE.height,
      ...option,
    }
  );
}

function OGImage({
  primaryColor = 'rgba(255,150,255,0.5)',
  primaryTextColor = 'rgb(255,150,255)',
  ...props
}: Props): ReactElement {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        color: 'white',
        backgroundColor: '#0c0c0c',
        backgroundImage: `linear-gradient(to right top, ${primaryColor}, transparent)`,
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
            color: primaryTextColor,
          }}
        >
          <p
            style={{
              fontSize: '56px',
              fontWeight: 600,
            }}
          >
            {props.site}
          </p>
        </div>
        <p
          style={{
            fontWeight: 800,
            fontSize: '82px',
          }}
        >
          {props.title}
        </p>
        <p
          style={{
            fontSize: '52px',
            color: 'rgba(240,240,240,0.7)',
          }}
        >
          {props.description}
        </p>
      </div>
    </div>
  );
}
