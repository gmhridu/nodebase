import { workflowsRouter } from "@/features/workflows/server/router";
import { createTRPCRouter, protectedProcedure } from "../init";
import prisma from "@/lib/db";

export const appRouter = createTRPCRouter({
  workflows: workflowsRouter,

  getUsers: protectedProcedure.query(({ ctx }) => {
    return prisma.user.findUniqueOrThrow({
      where: {
        id: ctx.auth.user.id,
      },
    });
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
