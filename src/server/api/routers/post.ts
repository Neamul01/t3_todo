import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

let posts = [
  {
    id: 1,
    name: "first post",
  },
];

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ input }) => {
      // simulate a slow db call
      // await new Promise((resolve) => setTimeout(resolve, 1000));

      posts.push({ id: Math.floor(Math.random() * 100), name: input.name });
      return posts;
    }),

  getLatest: publicProcedure.query(() => {
    return posts;
  }),

  delete: publicProcedure.input(z.number()).mutation(async ({ input }) => {
    posts = posts.filter((post) => post.id !== input);
    console.log("delete id", input);
    return posts;
  }),
});
