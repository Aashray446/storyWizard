import { baseUrl } from "./config"

export const fetchStories = async () => {
    const response = await fetch(`${baseUrl}/get_n_stories?n=4`);
    const stories = await response.json();
    return stories;
}


export const getStory = async (storyId) => {
    const response = await fetch(`${baseUrl}/get_story?id=${storyId}`);
    const story = await response.json();
    return story;
}


