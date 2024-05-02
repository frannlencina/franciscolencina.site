
import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
      title: z.string(),
      description: z.string(),
      website: z.string(),
      author: z.string(),
      image: z.string().optional(),
    }),
  });
  
export const collections = {
  'projects': projectsCollection,
};