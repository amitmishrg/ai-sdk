import { streamText } from 'ai';
import { model } from '../modal';

export const answerMyQuestion = async (prompt: string) => {
  const { textStream } = await streamText({
    model: model,
    prompt,
  });

  for await (const text of textStream) {
    process.stdout.write(text);
  }

  return textStream;
};

await answerMyQuestion('What is the color of the sun?');
