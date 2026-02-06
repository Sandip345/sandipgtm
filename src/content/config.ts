import { defineCollection, z } from 'astro:content';

const education = defineCollection({
  type: 'content',
  schema: z.object({
    school: z.string(),
    location: z.string().optional(),
    degree: z.string(),
    start: z.string(), // "Aug 2024"
    end: z.string().optional(), // "Present" or "Apr 2023"
    courses: z.array(z.string()).optional(),
    order: z.number().optional(), // optional manual ordering
  }),
});

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

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});



export const collections = {
  education,
  projects,
  news,
  experience,
  blog,
};
