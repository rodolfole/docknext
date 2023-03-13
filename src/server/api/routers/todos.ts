import { z } from "zod";

import { prisma } from "../../db";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const todosRouter = createTRPCRouter({
  createTodo: protectedProcedure
    .input(z.object({ name: z.string(), description: z.string() }))
    .mutation(({ input, ctx }) => {
      console.log("aqui input:", input);

      const todo = prisma.todo.create({
        data: {
          ...input,
          userId: ctx.session.user.id,
        },
      });
      return todo;
    }),

  getTodos: protectedProcedure.query(async ({ ctx }) => {
    try {
      const todos = await prisma.todo.findMany({
        where: {
          userId: ctx.session.user.id,
        },
      });

      return todos;
    } catch (error) {
      console.log(error);
    }
  }),
});
