import mongoose from 'mongoose';
import toJSON from '../toJSON/toJSON';
import paginate from '../paginate/paginate';
import { IStoryModel, IStoryDoc } from './story.interfaces';

const storySchema = new mongoose.Schema<IStoryDoc, IStoryModel>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    story: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
    },
    audioUrl: {
      type: String,
    },
    generatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

storySchema.plugin(toJSON);
storySchema.plugin(paginate);

const Story = mongoose.model<IStoryDoc, IStoryModel>('Story', storySchema);

export default Story;
