import { generateText } from 'ai';
import { readFileSync } from 'fs';
import path from 'path';

import { model } from '../modal';

export const summarizeText = async (input: string) => {
  const { text } = await generateText({
    model: model,
    messages: [
      {
        role: 'system',
        content:
          `You are a text summarizer. ` +
          `Summarize the text you receive. ` +
          `Be concise. ` +
          `Return only the summary. ` +
          `Do not use the phrase "here is a summary". ` +
          `Highlight relevant phrases in bold. ` +
          `The summary should be two sentences long. `,
      },
      {
        role: 'user',
        content: input,
      },
    ],
  });

  return text;
};

const text = readFileSync(
  path.join(import.meta.dirname, 'fox-who-devoured-history.md'),
  'utf-8'
);

const summary = await summarizeText(text);

console.log(summary);
