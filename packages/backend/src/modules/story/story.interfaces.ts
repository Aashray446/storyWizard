import mongoose, { Model, Document } from 'mongoose';
import { QueryResult } from '../paginate/paginate';

export interface IStory {
  title: string;
  story: string;
  imgUrl: string;
  audioUrl: string;
  generatedBy: mongoose.Types.ObjectId;
}

export interface IStoryDoc extends IStory, Document {}

export interface IStoryModel extends Model<IStoryDoc> {
  paginate(filter: Record<string, any>, options: Record<string, any>): Promise<QueryResult>;
}

// export type UpdateUserBody = Partial<IStoryModel>;

// export type NewRegisteredUser = Omit<IStoryModel, 'role' | 'isEmailVerified'>;

// export type NewCreatedUser = Omit<IStoryModel, 'isEmailVerified'>;
