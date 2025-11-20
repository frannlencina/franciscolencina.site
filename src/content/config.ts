
import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
    type: 'content', 
    schema: z.object({
      title: z.string(),
      description: z.string(),
      important: z.boolean().optional(),
      technologies: z.array(z.string()).optional(),
      website: z.string(),
      author: z.string(),
      image: z.string().optional(),
    }),
  });
  
export const collections = {
  'projects': projectsCollection,
};