import {
  defineCollections,
  defineConfig,
  frontmatterSchema,
} from 'fumadocs-mdx/config';

import { rehypeCode } from 'fumadocs-core/mdx-plugins';
import { remarkImage } from 'fumadocs-core/mdx-plugins';
import { remarkInstall } from 'fumadocs-docgen';
import { z } from 'zod';

export const blog = defineCollections({
  type: 'doc',
  dir: './content/blog',
  schema: frontmatterSchema.extend({
    author: z.string().or(z.array(z.string())),
    date: z.string().or(z.date()).optional(),
    published: z.boolean().default(true),
    category: z.string(),
  }),
});

export default defineConfig({
  mdxOptions: {
    rehypePlugins: [rehypeCode],
    remarkPlugins: [remarkImage, remarkInstall],
  },
});
