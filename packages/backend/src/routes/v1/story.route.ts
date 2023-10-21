import express, { Router } from 'express';
import { storyController } from '../../modules/story';

const router: Router = express.Router();

router.post('/generate', storyController.generateStory);

export default router;
