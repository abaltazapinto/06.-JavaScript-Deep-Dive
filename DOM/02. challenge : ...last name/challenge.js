// Challenge: 
// 1. Update text in the Scrimba mini-browser to match the title of this cast
//coding challenge
// 2. Create an h2 with class 'tagline' and text "I can create HTML elements!"
// Add it right under the modified text.


document.querySelector("h1").innerText = "Coding Challenge";

const newElement = document.createElement("h2");

newElement.className =  "tagline";
newElement.innerText = "I can create HTML elements!";

document.querySelector("body").appendChild(newElement);