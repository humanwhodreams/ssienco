import { type InferMetaType, type InferPageType, loader } from 'fumadocs-core/source';
import { blog as articles, docs, meta } from '@/.source';

import { SourceIcon } from '@/components/ui/source-icon';
import { createElement } from 'react';
import { createMDXSource } from 'fumadocs-mdx';
import { icons } from 'lucide-react';

export const source = loader({
  baseUrl: '/docs',
  icon: (icon) => {
    if (icon && icon in icons)
      return createElement(SourceIcon, {
        icon: icons[icon as keyof typeof icons],
      });
  },
  source: createMDXSource(docs, meta),
});

export const blog = loader({
  baseUrl: '/blog',
  source: createMDXSource(articles, []),
});

export type Page = InferPageType<typeof source>;
export type Meta = InferMetaType<typeof source>;
