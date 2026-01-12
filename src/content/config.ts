import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string().or(z.array(z.string())),
    description: z.string(),
    tags: z.string().or(z.array(z.string())).optional(),
    date: z.date().optional(),
    featured: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date().optional(),
    publisher: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  projects,
  blog,
};
