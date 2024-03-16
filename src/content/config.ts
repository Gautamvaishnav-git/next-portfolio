import { defineCollection, z } from "astro:content";

// 2. Define your collection(s)
const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    date: z.string(),
    description: z.string().optional(),
  }),
});

const aboutCollection = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      title: z.string(),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  blogs: blogCollection,
  about: aboutCollection,
};
