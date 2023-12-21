import { baseUrl } from "./config"
import axios from 'axios';

const unqiueSessionId = () => {
    return Math.floor(Math.random() * 1000000000);
}

const sessionId = unqiueSessionId();

export const fetchStories = async () => {
    const response = await axios.get(`${baseUrl}/stories/getStories`);
    return response.data.results;
}


export const getStory = async (storyId) => {
    const response = await axios.get(`${baseUrl}/stories/getStory/${storyId}`);
    console.log(response.data);
    return response.data;
}

/**
 * 
 * @param {string} topic 
 * @returns {Promise<Story>} story - A story object
 * @typedef {Object} Story
 * @property {string} moral - The moral of the story
 * @property {string} story - The story
 * @property {string} title - The title of the story
 */
export const generateStory = async (topic) => {
    const response = await axios.post(`${baseUrl}/stories/generateStory`, { storyTopic: topic });
    return response.data;
}

const getStoryCount = async () => {
    const response = await fetch(`${baseUrl}/get_story_count`);
    const count = await response.json();
    return count.count;
}

export const askFollowUp = async (storyId, audio, sessionId) => {
    const formData = new FormData();
    formData.append('audio', audio);
    formData.append('session_id', sessionId);
    formData.append('story_id', storyId);
    const response = await axios.post(`${baseUrl}/post_followup_audio`, formData);
    const data = await response.data;
    return data;
}

export const getFollowUp = async (story, question) => {
    const response = await axios.post(`${baseUrl}/stories/answer-questions`, {
        question: question,
        storyTopic: story,
    });
    return response;
}