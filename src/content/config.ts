import { string } from "astro/zod";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      tags: z
        .string()
        .array()
        .transform((tags) => tags.map((tag) => `#${tag}`)),
      draft: z.boolean().default(true),
      featured: z.boolean().default(false),
      series_id: z.string().optional(),
      pubDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      updatedDate: z
        .string()
        .optional()
        .transform((str) => (str ? new Date(str) : undefined)),
      cover: image()
        .refine((img) => img.width >= 1080, {
          message: "Cover image must be at least 1080 pixels wide!",
        })
        .optional(),
      coverAlt: z.string().optional(),
    }),
});

export const collections = { blog };
