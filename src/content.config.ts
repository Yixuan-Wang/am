import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./data/news" }),
  schema: z.object({
    date: z.date(),
    icon: z.string().optional(),
  })
});

export const collections = { news };
