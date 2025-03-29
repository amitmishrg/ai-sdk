import { generateText } from 'ai';
import { model } from '../local-llm/main';

const systemPrompt =
  `You will receive an image. ` +
  `Please create an alt text for the image. ` +
  `Be concise. ` +
  `Use adjectives only when necessary. ` +
  `Do not pass 160 characters. ` +
  `Use simple language. `;

async function urlToBase64(url) {
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();
  return Buffer.from(buffer).toString('base64');
}

export const describeImage = async (imageUrl: string) => {
  const base64Image = await urlToBase64(imageUrl);

  const { text } = await generateText({
    model: model,
    system: systemPrompt,
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'image',
            image: base64Image,
          },
        ],
      },
    ],
  });

  return text;
};

const description = await describeImage(
  'https://github.com/ai-hero-dev/ai-hero/blob/main/internal/assets/fireworks.jpg?raw=true'
);

console.log(description);
