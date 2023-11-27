import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		schema: z.object({
			company: z.string(),
			description: z.string(),
			role: z.string(),
			dateRange: z.string(),
			img: z.string(),
			img_alt: z.string().optional(),
			publishDate: z.coerce.date(),
			tools: z.array(z.string()),
		}),
	}),
};
