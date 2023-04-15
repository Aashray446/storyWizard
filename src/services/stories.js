import { baseUrl } from "./config"

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

