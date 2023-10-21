import ChatBot from './chatbot';

export interface IStoryGeneratorResponse {
  title: string;
  story: string;
}

export interface IImagePromptGeneratorResponse {
  imagePrompt: string;
}

export const storyGenerator = new ChatBot<IStoryGeneratorResponse>([
  {
    role: 'system',
    content:
      "Generate a 4 paragraph children's story with title about the topic that I provide and  that contains a moral. Return as JSON",
  },
  {
    role: 'user',
    content: 'A story about a man creating history',
  },
  {
    role: 'assistant',
    content:
      '{\n  "title": "The History Maker",\n  "story": "Once upon a time, in a small village called Harmonyville, lived a man named Peter who had big dreams. Peter loved to read books about famous adventurers and he was inspired by their heroic tales. He wanted to create his own history and do something truly remarkable. With determination in his heart, he started his journey.\\n\\nPeter knew that to create history, he needed to overcome challenges. He studied hard, learned new skills, and worked tirelessly. People in the village laughed at his ambitious dreams, but he didn\'t let their doubt discourage him. He believed in himself.\\n\\nAs time passed, Peter became known for his extraordinary inventions. He created a flying machine, a device that could produce electricity, and even a time-traveling device! People couldn\'t believe their eyes. Peter\'s inventions not only amazed everyone but also made their lives easier and better.\\n\\nThe moral of the story is that with hard work, determination, and belief in oneself, anyone can create history. Peter\'s perseverance and ability to overcome obstacles led him to become a history maker, leaving a lasting impact on the world."\n}',
  },
]);

export const imagePromptGenerator = new ChatBot<IImagePromptGeneratorResponse>([
  {
    role: 'system',
    content:
      'Create one text to image prompts that will be suitable as the title image of the below given story. Do not include the character names, instead include only the characters physical description. Return as JSON',
  },
]);
