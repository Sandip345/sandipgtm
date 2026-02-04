import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z
    .object({
      title: z.string(),
      date: z.string().optional(),
      period: z.string().optional(),
      description: z.string().optional(),
      tags: z.array(z.string()).optional(),
      cover: z.string().optional(),
      featured: z.boolean().optional()
    })
    .passthrough()
});

const news = defineCollection({
  type: 'content',
  schema: z
    .object({
      title: z.string(),
      date: z.string().optional(),
      description: z.string().optional(),
      link: z.string().optional()
    })
    .passthrough()
});


const experience = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    company: z.string(),
    location: z.string().optional(),
    start: z.string().optional(),
    end: z.string().optional(),
    summary: z.string().optional(),

    // ✅ add these
    coverImage: z.string().optional(),
    gallery: z.array(z.string()).optional(),

    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  projects,
  news,
  experience,
};
