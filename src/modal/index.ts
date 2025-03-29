import { createOpenAI } from '@ai-sdk/openai';
import dotenv from 'dotenv';
dotenv.config();

const openai = createOpenAI({
  baseURL: 'https://api.studio.nebius.com/v1/',
  apiKey:
    'eyJhbGciOiJIUzI1NiIsImtpZCI6IlV6SXJWd1h0dnprLVRvdzlLZWstc0M1akptWXBvX1VaVkxUZlpnMDRlOFUiLCJ0eXAiOiJKV1QifQ.eyJzdWIiOiJnb29nbGUtb2F1dGgyfDExNDgxNjg3NjgxNjgyMDk5NjI0NSIsInNjb3BlIjoib3BlbmlkIG9mZmxpbmVfYWNjZXNzIiwiaXNzIjoiYXBpX2tleV9pc3N1ZXIiLCJhdWQiOlsiaHR0cHM6Ly9uZWJpdXMtaW5mZXJlbmNlLmV1LmF1dGgwLmNvbS9hcGkvdjIvIl0sImV4cCI6MTkwMDkyMjg1NywidXVpZCI6IjUzOTZlNmZiLWMwNzctNDQ3NS04YTc1LWYyMzZkN2MxZmJiYSIsIm5hbWUiOiJ0ZXN0IiwiZXhwaXJlc19hdCI6IjIwMzAtMDMtMjhUMTA6MDc6MzcrMDAwMCJ9.RIRzCtKB9JnwK3lN_uzI4jjihTV4c7SnTC9KR0Lvyms',
});

export const model = openai('deepseek-ai/DeepSeek-V3');
