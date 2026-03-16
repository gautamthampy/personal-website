import { tool } from 'ai';
import { z } from 'zod';

export const getSport = tool({
  description:
    "Returns information about Gautam's achievements and leadership. Use when users ask about accomplishments, awards, leadership, or the IEEE story.",
  parameters: z.object({}),
  execute: async () => ({
    techJourney: {
      title: "Highlights & Achievements",
      highlights: [
        {
          achievement: "IEEE MGA Darrel Chong Award",
          context: "Won amongst 3,600+ IEEE student branches worldwide as Branch Chair",
        },
        {
          achievement: "IEEE MGA Exemplary Student Branch Award",
          context: "Recognized as exemplary branch out of 3,600+ global IEEE student branches",
        },
        {
          achievement: "IEEE SIGHT Group Founder",
          context: "Founded a group providing coding classes to 50+ underprivileged children",
        },
        {
          achievement: "SJSU GPA 3.77/4.0",
          context: "M.S. Computer Engineering — ML, OS, Embedded Systems, Distributed Systems",
        },
        {
          achievement: "4 Cloud & Infra Certifications",
          context: "GCP Professional Data Engineer, Network Engineer, Associate Cloud Engineer + HashiCorp Terraform",
        },
        {
          achievement: "Conference Presenter",
          context: "Presented research at GMis 2024 and SVCC 2025 on secure document retrieval",
        },
      ],
      philosophy: "Build systems that scale, ship things that matter, and never stop learning 🚀",
    },
  }),
});
