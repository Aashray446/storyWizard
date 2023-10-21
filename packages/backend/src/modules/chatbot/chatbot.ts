import { OpenAI } from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources/chat';
import httpStatus from 'http-status';
import config from '../../config/config';
import { ApiError } from '../errors';
import { logger } from '../logger';

class ChatBot<T> {
  private openai: OpenAI;

  public prompt: ChatCompletionMessageParam[];

  constructor(prompt: ChatCompletionMessageParam[]) {
    this.openai = new OpenAI({
      apiKey: config.openaiApiKey,
      timeout: 30000,
    });
    this.prompt = prompt;
  }

  public async getChatResponse(prompt: string): Promise<T> {
    this.prompt.push({
      role: 'user',
      content: prompt,
    });

    const response: any = await this.openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: this.prompt,
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    if (response.choices[0].message) {
      try {
        return JSON.parse(response.choices[0].message.content) as T;
      } catch (error) {
        logger.error(error);
        return [] as unknown as T;
      }
    }
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Couldn`t get GPT response');
  }
}

export default ChatBot;
