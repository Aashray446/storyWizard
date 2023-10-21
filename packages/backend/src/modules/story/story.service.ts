import mongoose from 'mongoose';
import httpStatus from 'http-status';
import Story from './story.model';
import { IStoryDoc } from './story.interfaces';
import { ApiError } from '../errors';
import { IStoryGeneratorResponse, storyGenerator } from '../chatbot';

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
