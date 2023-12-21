import express, { Router } from 'express';
import { storyController } from '../../modules/story';

const router: Router = express.Router();

router.post('/generateStory', storyController.genereateStory);
router.post('/image', storyController.generateImage);
router.post('/answer-questions', storyController.answerQuestion);
router.get('/getStories', storyController.getStories);
router.get('/getStory/:id', storyController.getStory);

export default router;
