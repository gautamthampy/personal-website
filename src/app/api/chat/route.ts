import { google } from '@ai-sdk/google';
import { streamText } from 'ai';
import { SYSTEM_PROMPT } from './prompt';
import { getProjects } from './tools/getProjects';
import { getPresentation } from './tools/getPresentation';
import { getResume } from './tools/getResume';
import { getContact } from './tools/getContact';
import { getSkills } from './tools/getSkills';
import { getSport } from './tools/getSport';
import { getCrazy } from './tools/getCrazy';
import { getInternship } from './tools/getInternship';

export const maxDuration = 30;

function errorHandler(error: unknown) {
  if (error == null) return 'Unknown error';
  if (typeof error === 'string') return error;
  if (error instanceof Error) return error.message;
  return JSON.stringify(error);
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    messages.unshift(SYSTEM_PROMPT);

    const tools = {
      getProjects,
      getPresentation,
      getResume,
      getContact,
      getSkills,
      getSport,
      getCrazy,
      getInternship,
    };

    const result = streamText({
      model: google('gemini-2.5-flash'),
      messages,
      toolCallStreaming: true,
      tools,
      maxSteps: 2,
    });

    return result.toDataStreamResponse({ getErrorMessage: errorHandler });
  } catch (err) {
    const errorMessage = errorHandler(err);
    return new Response(errorMessage, { status: 500 });
  }
}
