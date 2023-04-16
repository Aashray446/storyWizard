import { baseUrl } from "./config"
import axios from 'axios';

export const fetchStories = async () => {
    const count = await getStoryCount();
    const response = await fetch(`${baseUrl}/get_n_stories?n=${count}`);
    const stories = await response.json();
    return stories;
}


export const getStory = async (storyId) => {
    const response = await fetch(`${baseUrl}/get_story?id=${storyId}`);
    const story = await response.json();
    return story;
}


export const generateStory = async (topic) => {
    const response = await fetch(`${baseUrl}/generate?topic=${topic}`);
    const story = await response.json();
    return story;
}

const getStoryCount = async () => {
    const response = await fetch(`${baseUrl}/get_story_count`);
    const count = await response.json();
    return count.count;
}



export const askFollowUp = async (storyId, audio, sessionId) => {
    // post in multipart form data
    const formData = new FormData();
    formData.append('audio', audio);
    formData.append('session_id', sessionId);
    formData.append('story_id', storyId);
    const response = await axios.post(`${baseUrl}/post_followup_audio`, formData);
    const data = await response.data;
    return data;
}