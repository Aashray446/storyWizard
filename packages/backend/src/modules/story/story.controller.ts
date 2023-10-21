import httpStatus from 'http-status';
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import catchAsync from '../utils/catchAsync';
import ApiError from '../errors/ApiError';
import pick from '../utils/pick';
import { IOptions } from '../paginate/paginate';
import * as storyService from './story.service';

export const createStory = catchAsync(async (req: Request, res: Response) => {
  const story = await storyService.createStory(req.body);
  res.status(httpStatus.CREATED).send(story);
});

export const getStories = catchAsync(async (req: Request, res: Response) => {
  const filter = pick(req.query, ['title', 'content']);
  const options: IOptions = pick(req.query, ['sortBy', 'limit', 'page', 'projectBy']);
  const result = await storyService.queryStories(filter, options);
  res.send(result);
});

export const getStory = catchAsync(async (req: Request, res: Response) => {
  if (typeof req.params['storyId'] === 'string') {
    const story = await storyService.getStoryById(new mongoose.Types.ObjectId(req.params['storyId']));
    if (!story) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Story not found');
    }
    res.send(story);
  }
});

export const updateStory = catchAsync(async (req: Request, res: Response) => {
  if (typeof req.params['storyId'] === 'string') {
    const story = await storyService.updateStoryById(new mongoose.Types.ObjectId(req.params['storyId']), req.body);
    res.send(story);
  }
});

export const deleteStory = catchAsync(async (req: Request, res: Response) => {
  if (typeof req.params['storyId'] === 'string') {
    await storyService.deleteStoryById(new mongoose.Types.ObjectId(req.params['storyId']));
    res.status(httpStatus.NO_CONTENT).send();
  }
});

export const getUserStories = catchAsync(async (req: Request, res: Response) => {
  if (typeof req.params['userId'] === 'string') {
    const filter = pick(req.query, ['title', 'content']);
    const options: IOptions = pick(req.query, ['sortBy', 'limit', 'page', 'projectBy']);
    const result = await storyService.queryStories(filter, options);
    res.send(result);
  }
});

export const generateStory = catchAsync(async (req: Request, res: Response) => {
  const story = await storyService.generateStory(req.body.storyTopic);
  res.status(httpStatus.CREATED).send(story);
});
