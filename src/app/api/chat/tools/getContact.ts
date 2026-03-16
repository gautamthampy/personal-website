import { tool } from 'ai';
import { z } from 'zod';

export const getContact = tool({
  description: 'Returns contact information for Gautam Thampy.',
  parameters: z.object({}),
  execute: async () => ({
    contact: {
      email: 'thampygautam@gmail.com',
      linkedin: 'https://linkedin.com/in/gthampy',
      github: 'https://github.com/gautamthampy',
      location: 'San Jose, California',
      availability: 'Open to internships and collaborations',
      preferredContact: 'Email or LinkedIn for professional inquiries',
    },
  }),
});
