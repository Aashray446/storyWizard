import ChatBot from './chatbot';

export interface IStoryGeneratorResponse {
  title: string;
  story: string;
  moral: string;
  image: string;
}

export interface IImagePromptGeneratorResponse {
  imagePrompt: string;
}

export const storyGenerator = new ChatBot<IStoryGeneratorResponse>(
  [
    {
      role: 'system',
      content:
        "Generate a 4 paragraph long children's story with title about the topic that I provide and that contains a moral. Return as json",
    },
  ],
  JSON.parse,
  'gpt-3.5-turbo-1106',
  true
);

export const imagePromptGenerator = new ChatBot<IImagePromptGeneratorResponse>(
  [
    {
      role: 'system',
      content:
        'Create one text to image prompts that will be suitable as the title image of the below given story. Do not include the character names, instead include only the characters physical description',
    },
  ],
  JSON.parse
);

export const questionAnswering = new ChatBot<{ response: string }>(
  [
    {
      role: 'system',
      content:
        "You are an assistant that answers the questions to the children's story given below. You should answer the questions descriptively in a way that a child can understand them. If the question asked is unrelated to the story, do not answer the question and instead reply by asking the user to ask questions related to the story. retrun as json",
    },
  ],
  JSON.parse,
  'gpt-3.5-turbo-1106',
  true
);

export const Dalle2 = new ChatBot<IImagePromptGeneratorResponse>(
  [
    {
      role: 'system',
      content:
        'Create one text to image prompts that will be suitable as the title image of the below given story. Do not include the character names, instead include only the characters physical description',
    },
  ],
  (res: any) => {
    return res.data.data[0].url;
  },
  'dall-e-3'
);

export const Dalle3 = new ChatBot<IImagePromptGeneratorResponse>(
  [
    {
      role: 'system',
      content:
        'Create one text to image prompts that will be suitable as the title image of the below given story. Do not include the character names, instead include only the characters physical description.',
    },
  ],
  (res: any) => {
    return res.data.data[0].url;
  },
  'dall-e-3'
);

export const AudioEngine = new ChatBot<any>(
  [],
  (res: any) => {
    return res;
  },
  'tts-1'
);
