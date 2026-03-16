import { tool } from 'ai';
import { z } from 'zod';

export const getCrazy = tool({
  description:
    "Returns something interesting, unique, or surprising about Gautam Thampy. Use when users ask about something crazy, interesting, unique, or fun.",
  parameters: z.object({}),
  execute: async () => ({
    crazy: {
      title: "I Built a Production RAG System From Scratch at Sandisk",
      story:
        "At Sandisk, I was handed millions of CVD failure records and Jira tickets and told to make sense of them. No existing pipeline, no template. I built a full RAG semantic search system on PostgreSQL/AWS RDS from the ground up — embedding pipelines, S3 caching, ETL layers, and even Windows .bat scripts to automate setup for the internal team. The wild part? I also had to learn failure analysis engineering on the fly while building the AI tooling for it. It cut resolution time by 30% and engineers use it daily now. That's the kind of problem I love — ambiguous, messy, and actually impactful.",
    },
  }),
});
