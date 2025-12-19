import { inngest } from "@/inngest/client";
import { baseProcedure, createTRPCRouter, protectedProcedure } from "../init";
import prisma from "@/lib/db";
import { google } from "@ai-sdk/google";
import { generateText } from "ai";

export const appRouter = createTRPCRouter({
  testAI: protectedProcedure.mutation(async () => {
    await inngest.send({ name: "execute/ai" });

    return {success: true, message: "Job queued"};
  }),
  getUsers: protectedProcedure.query(({ ctx }) => {
    return prisma.user.findUniqueOrThrow({
      where: {
        id: ctx.auth.user.id,
      },
    });
  }),
  getWorkflows: protectedProcedure.query(() => {
    return prisma.workflow.findMany();
  }),
  createWorkflow: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: "test/hello.world",
      data: {
        email: "hasanhridoymahabub9@gmail.com",
      },
    });

    return {
      success: true,
      message: "Job queued",
    };
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
