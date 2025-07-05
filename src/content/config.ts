import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    author: z.string().optional(),         // ✅ Now optional
    tags: z.array(z.string()).optional(),  // ✅ Now optional
  }),
});

export const collections = {
  blog,
};
