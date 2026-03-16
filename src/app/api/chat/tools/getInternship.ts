import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Use when the user asks if Gautam is looking for an internship or job, about his availability, or how to contact him for opportunities.",
  parameters: z.object({}),
  execute: async () => ({
    status: {
      lookingFor: 'SWE Internship / Full-time',
      role: 'Software Engineer | Backend Engineer | Cloud Engineer | AI/ML Engineer',
      availability: 'Available for Summer 2026 and beyond',
      contact: {
        email: 'thampygautam@gmail.com',
        linkedin: 'https://linkedin.com/in/gthampy',
      },
    },
    experience: [
      {
        company: 'Sandisk',
        role: 'Failure Analysis Engineering Intern — Gen AI',
        period: 'Aug 2025 – Present',
        highlight: 'Production RAG system — 30% faster failure resolution',
      },
      {
        company: 'SJSU — Research',
        role: 'Graduate Research Assistant',
        period: 'Oct 2024 – Aug 2025',
        highlight: 'Secure doc retrieval with Vertex AI & LlamaIndex — presented at GMis & SVCC',
      },
      {
        company: 'SADA, An Insight Company',
        role: 'Software Engineer',
        period: 'Jul 2022 – Jul 2024',
        highlight: 'GKE microservices, Terraform IaC, Vertex AI RAG — 500+ user scale',
      },
    ],
  }),
});
