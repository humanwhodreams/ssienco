import { loader } from 'fumadocs-core/source';
import { blog as articles } from '@/.source';

import { createMDXSource } from 'fumadocs-mdx';

export const blog = loader({
  baseUrl: '/blog',
  source: createMDXSource(articles, []),
});
