import { generateText } from 'ai';
import { model } from '../modal';

export const answerMyQuestion = async (prompt: string) => {
  const { text } = await generateText({
    model: model,
    prompt,
  });

  return text;
};

const answer = await answerMyQuestion(
  'what is the chemical formula for dihydrogen monoxide?'
);

console.log(answer);
