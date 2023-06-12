import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string().transform((t) =>
        t
          .toLowerCase()
          .split(" ")
          .map(function (word) {
            return word.replace(word[0], word[0].toUpperCase());
          })
          .join(" ")
      ),
      description: z.string(),
      tags: z
        .string()
        .array()
        .transform((tags) => tags.map((tag) => `#${tag}`)),
      draft: z.boolean().default(false),
      featured: z.boolean().default(false),
      planned: z.boolean().default(false),
      seriesId: z.string().optional(),
      orderInSeries: z.number().optional(),
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

const series = defineCollection({
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog, series };
