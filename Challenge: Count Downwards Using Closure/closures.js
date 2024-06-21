// Challenge: Write a countdown function with a hard-coded starting number inside closure
// Stretch goal: Write a countdown function that can count from a provided number,
// with a provided step

// Start
function countdown(value, decrement) {
    let countFromNum = value + decrement
    return function decreaseFunction(){
          countFromNum -= decrement
        return countFromNum
    }
    // write your code here
  }
  
  const countingDown = countdown(20, 5);
  
  console.log(countingDown());
  console.log(countingDown());
  console.log(countingDown());
  // Stretch goal - pass the starting number and the step as arguments
// Use them in closure instead of hard-coded values.