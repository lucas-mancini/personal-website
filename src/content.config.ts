import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const collections = {
	work: defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/work" }),
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
