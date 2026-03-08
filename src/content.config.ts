import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    content_blocks: z.array(z.any()).optional().default([]),
    seo: z
      .object({
        page_description: z.string().optional(),
        canonical_url: z.string().optional(),
        featured_image: z.string().optional(),
        open_graph_type: z.string().optional().default('website'),
        no_index: z.boolean().optional().default(false),
      })
      .optional()
      .default({}),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional().default(''),
    author: z.string().optional().default(''),
    date: z.coerce.date(),
    image: z.string().optional().default(''),
    image_alt: z.string().optional().default(''),
    tags: z.array(z.string()).optional().default([]),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { pages, posts };
