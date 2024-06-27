// Challenge: 
// 1. Select h1 and add a click event listener. 
// Log the text from the element to the console.

// If you're not sure how to get text, feel free to check out hint.js

// 2. Add the same functionality to all the elements displayed
// in Scrimba web browser. Finally, try to trigger the event when you
// hover the mouse over the elements, instead of when clicking on them
  
const elh1  = document.querySelector("h1");


elh1.addEventListener('click', () => {
    console.log(elh1.innerText);
});


elh1.addEventListener('mouseover', () => {
    console.log(elh1.innerText);
}
);

document.body.addEventListener('click', event => {
    console.log(event.target.textContent);
  });