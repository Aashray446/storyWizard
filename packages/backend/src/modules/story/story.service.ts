import mongoose from 'mongoose';
import httpStatus from 'http-status';
import fs from 'fs';
import Story from './story.model';
import { IStoryDoc } from './story.interfaces';
import { ApiError } from '../errors';
import { IStoryGeneratorResponse, storyGenerator, Dalle3, questionAnswering, AudioEngine } from '../chatbot';
import { logger } from '../logger';
import config from '../../config/config';

/**
 * Create a story
 * @param {Object} storyBody
 * @returns {Promise<IStoryDoc>}
 */
export const createStory = async (storyBody: any): Promise<IStoryDoc> => {
  const story = await Story.create(storyBody);
  return story;
};

/**
 * Generate a story
 * @param {string} storyTopic
 * @returns {Promise<IStory>}
 */
export const generateStory = async (storyTopic: string): Promise<IStoryGeneratorResponse> => {
  const story = await storyGenerator.getChatResponse(storyTopic);
  return story;
};

/**
 * Ask a question
 * @param {string} question,
 * @param {string} story
 * @returns {Promise<String>}
 * @throws {ApiError}
 *
 * */
export const askQuestion = async (question: string, story: string): Promise<string> => {
  const questionResponse = await questionAnswering.getChatResponse(`Q: ${question}\nA: ${story}\nQ:`);
  if (!questionResponse) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Error generating story');
  }
  /**
   * {"response": "The moral of the story is that it's important to appreciate and be grateful for the things we have, even if they seem ordinary or familiar. It's easy to take things for granted, but we should always remember to be thankful for the special and wonderful things in our lives."}
   */
  const audio = await AudioEngine.generateAudio(questionResponse.response);

  // delete the audio file after 30 seconds
  setTimeout(() => {
    fs.unlinkSync('./public/'.concat(audio as string));
  }, 30000);

  return config.clientUrl + audio;
};

/**
 * Query for stories
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @returns {Promise<QueryResult>}
 */
export const queryStories = async (filter: any, options: any): Promise<any> => {
  const stories = await Story.paginate(filter, options);
  return stories;
};

/**
 * Get story by id
 * @param {ObjectId} id
 * @returns {Promise<IStoryDoc>}
 */
export const getStoryById = async (id: mongoose.Types.ObjectId): Promise<IStoryDoc | null> => {
  return Story.findById(id);
};

/**
 * Update story by id
 * @param {ObjectId} storyId
 * @param {Object} updateBody
 * @returns {Promise<IStoryDoc>}
 */
export const updateStoryById = async (storyId: mongoose.Types.ObjectId, updateBody: any): Promise<IStoryDoc> => {
  const story = await getStoryById(storyId);
  if (!story) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Story not found');
  }
  Object.assign(story, updateBody);
  await story.save();
  return story;
};

/**
 * Delete story by id
 * @param {ObjectId} storyId
 * @returns {Promise<IStoryDoc>}
 */
export const deleteStoryById = async (storyId: mongoose.Types.ObjectId): Promise<void> => {
  await Story.findByIdAndDelete(storyId);
};

/**
 * Get story by user id
 * @param {ObjectId} userId
 * @returns {Promise<IStoryDoc>}
 * @throws {ApiError}
 * @returns {Promise<IStoryDoc>}
 */

export const getStoryByUserId = async (userId: string): Promise<IStoryDoc[]> => {
  return Story.find({ generatedBy: userId });
};

/**
 * Generate image via Dall E OpenAI
 * @param {string} prompt
 * @returns {Promise<any>}
 * @throws {ApiError}
 *
 */
export const generateImageDallE = async (prompt: string): Promise<any> => {
  // return Dalle3.generateImages(prompt, '1792x1024');
  const imageData = await Dalle3.generateImages(prompt, '1024x1024');
  logger.info(imageData);
  return imageData;
};
