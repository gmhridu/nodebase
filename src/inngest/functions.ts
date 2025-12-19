import prisma from "@/lib/db";
import { inngest } from "./client";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { createDeepSeek } from "@ai-sdk/deepseek";
import { createGroq } from "@ai-sdk/groq";
import { generateText } from "ai";

const google = createGoogleGenerativeAI();
const deepseek = createDeepSeek();
const groq = createGroq();

export const execute = inngest.createFunction(
  { id: "excute" },
  { event: "execute/ai" },
  async ({ event, step }) => {
    const { steps: geminiSteps } = await step.ai.wrap(
      "gemini-generate-text",
      generateText,
      {
        model: google("gemini-3-flash-preview"),
        system: "You are a helpful assistant.",
        prompt: "what is 2+2?",
      }
    );

    // const { steps: deepseekSteps } = await step.ai.wrap(
    //   "deepseek-generate-text",
    //   generateText,
    //   {
    //     model: deepseek("deepseek-chat"),
    //     system: "You are a helpful assistant.",
    //     prompt: "what is 2+2?",
    //   }
    // );

    // const { steps: groqSteps } = await step.ai.wrap(
    //   "groq-generate-text",
    //   generateText,
    //   {
    //     model: groq("gemma2-9b-it"),
    //     system: "You are a helpful assistant.",
    //     prompt: "what is 2+2?",
    //   }
    // );

    return {
      geminiSteps,
    };
  }
);
