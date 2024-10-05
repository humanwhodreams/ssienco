import {
  defineCollections,
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from 'fumadocs-mdx/config';

import { remarkImage } from 'fumadocs-core/mdx-plugins';
import { z } from 'zod';

export const { docs, meta } = defineDocs({
  // MD/MDX file definitions
  docs: {
    schema: frontmatterSchema.extend({
      published: z.boolean().default(true),
    }),
  },
  // JSON/YAML file definitions
  meta: {
    schema: metaSchema.extend({
      description: z.string().optional(),
    }),
  },
});

export const blog = defineCollections({
  type: 'doc',
  dir: './content/blog',
  schema: frontmatterSchema.extend({
    author: z.string(),
    date: z.string().or(z.date()).optional(),
  }),
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkImage],
  },
});
