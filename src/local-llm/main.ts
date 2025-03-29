import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { generateText } from 'ai';

export const lmstudio = createOpenAICompatible({
  name: 'lmstudio',
  baseURL: `http://127.0.0.1:1234/v1/`,
});

export const model = lmstudio('mathstral-7b-v0.1');

export const askLocalLLMQuestion = async (input: string) => {
  const { text } = await generateText({
    model,
    prompt: input,
    maxRetries: 0,
  });

  return text;
};

const input = `Tell me a story about your grandmother.`;

// const localLLMResult = await askLocalLLMQuestion(input);

// console.log(localLLMResult);
