/* eslint-disable @typescript-eslint/dot-notation */
import { OpenAI } from 'openai';
import { ChatCompletionCreateParamsNonStreaming, ChatCompletionMessageParam } from 'openai/resources/chat';
import httpStatus from 'http-status';
import fs from 'fs';
import config from '../../config/config';
import { ApiError } from '../errors';
import { logger } from '../logger';
import { generateUniqueFileName } from '../utils';

class ChatBot<T> {
  private openai: OpenAI;

  private model = 'gpt-3.5-turbo';

  private parser;

  public prompt: ChatCompletionMessageParam[];

  private json = false;

  constructor(prompt: ChatCompletionMessageParam[], parser: Function, model?: string, json?: boolean) {
    this.openai = new OpenAI({
      apiKey: config.openaiApiKey,
      timeout: 30000,
    });
    this.prompt = prompt;
    this.parser = parser;
    this.model = model || this.model;
    this.json = json || this.json;
  }

  public async getChatResponse(prompt: string): Promise<T> {
    const promptWithUser = [
      ...this.prompt,
      {
        role: 'user',
        content: prompt,
      },
    ];

    const options: ChatCompletionCreateParamsNonStreaming = {
      model: this.model,
      messages: promptWithUser as ChatCompletionMessageParam[],
      temperature: 0.4,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.json ? (options['response_format'] = { type: 'json_object' }) : null;

    const response: any = await this.openai.chat.completions.create({
      ...options,
    });

    if (response.choices[0].message) {
      try {
        logger.info(response.choices[0].message.content);
        return this.parser(response.choices[0].message.content) as T;
      } catch (error) {
        logger.error(error);
        return [] as unknown as T;
      }
    }
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Couldn`t get GPT response');
  }

  public async generateImages(
    prompt: string,
    size: '256x256' | '512x512' | '1024x1024' | '1792x1024' | '1024x1792' | null
  ): Promise<string> {
    const data = await this.openai.images.generate({
      prompt: this.prompt[0]!.content + prompt,
      model: this.model,
      n: 1,
      response_format: 'b64_json',
      size,
    });
    if (data) {
      const image = data.data.length > 0 && data.data[0] ? data.data[0].b64_json : '';
      if (image) {
        const filename = generateUniqueFileName().concat('.jpeg');
        fs.writeFileSync('./public/'.concat(filename), image, 'base64');
        return filename;
      }
    }
    return '';
  }

  public async generateAudio(text: string): Promise<any> {
    const respone = this.openai.audio.speech.create({
      model: this.model,
      voice: 'alloy',
      input: text,
    });
    const audio = await (await respone).arrayBuffer();
    const filename = generateUniqueFileName().concat('.mp3');
    fs.writeFileSync('./public/'.concat(filename), Buffer.from(audio));
    return filename;
  }
}

export default ChatBot;
