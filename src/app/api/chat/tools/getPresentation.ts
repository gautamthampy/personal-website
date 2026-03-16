import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'Returns a personal introduction of Gautam Thampy. Use for "Who are you?" or "Tell me about yourself".',
  parameters: z.object({}),
  execute: async () => ({
    presentation:
      "I'm Gautam Thampy, a Computer Engineering grad student at San Jose State University (GPA 3.77, graduating May 2026). I have 2+ years of industry experience — most recently as a Gen AI intern at Sandisk building production RAG systems, and before that as a software engineer at SADA (a Google Cloud partner) where I shipped cloud infrastructure and backend services at scale. I care a lot about building things that actually work in production — not just demos.",
    location: 'San Jose, California',
    currentStatus: 'M.S. Computer Engineering at SJSU — Gen AI Intern @ Sandisk',
    openTo: 'SWE internships and full-time roles',
  }),
});
