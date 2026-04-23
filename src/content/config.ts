import { defineCollection, z } from 'astro:content';

const portfolio = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: z.string().optional(),
      category: z.enum(['Web', 'App', 'System', 'POS', 'Other']),
      year: z.number().int().gte(1990).lte(2100),
      cover: image().optional(),
      coverUrl: z.string().url().optional(),
      summary: z.string(),
      tags: z.array(z.string()).default([]),
      order: z.number().optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      // 可選：若作品仍在線可提供外部連結（App Store / Google Play / 官方網站）
      storeLinks: z
        .object({
          ios: z.string().url().optional(),
          android: z.string().url().optional(),
          web: z.string().url().optional(),
        })
        .optional(),
      // 可選：媒體報導或相關連結
      press: z
        .array(
          z.object({
            title: z.string(),
            url: z.string().url(),
          })
        )
        .default([]),
    }),
});

export const collections = { portfolio };
