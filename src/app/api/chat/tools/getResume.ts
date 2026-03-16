import { tool } from 'ai';
import { z } from 'zod';

export const getResume = tool({
  description: "Use when the user asks to see or download Gautam's resume.",
  parameters: z.object({}),
  execute: async () => ({
    available: true,
  }),
});
