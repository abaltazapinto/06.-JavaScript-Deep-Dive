import Story from './components/Story.js';
import view from '../utils/view.js';


export default async function Item() {
    const sotry = await getStory();

    view.innerHTML = `<div>
    
    </div>`;
}

async function getStory() {
    const storyId = window.location.hash.split('/')[1];
    console.log(window.location.hash.split('/')[1]);
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}`)
    const story = await response.json();
    console.log(story);
    return story;

    
}