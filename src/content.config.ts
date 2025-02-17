import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { parse as parseBib, type Entry } from "@retorquere/bibtex-parser";

const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./data/news" }),
  schema: z.object({
    date: z.date(),
    icon: z.string().optional(),
  })
});

const publications = defineCollection<Entry>({
  loader: file('./data/publications.bib', {
    parser(pubs) {
      const bib = parseBib(pubs);
      return bib.entries.map(entry => ({
        ...entry,
        id: entry.key,
      }));
    }
  }),
});

export const collections = { news, publications };
