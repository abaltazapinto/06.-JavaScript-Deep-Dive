// function handleLikePost() {
//     let likeCount = 0;
//     return function addLike() {
//       likeCount += 1;    
//       return likeCount;
//     }
//     addLike();
//     console.log('like count:', likeCount);
//   }
  
  
//   handleLikePost();
//   handleLikePost();
//   handleLikePost(); 

//   function createCounter() {
//     let count = 0;
//     return function() {
//         count++;
//         return count;
//     };
// }

// const counter = createCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
 // function Factories
 // Closures allow you to create function factories, functions that generate other functions with customized behavior based on initial parameters.

//  //function factories
//  function createMultiplier(multiplier) {
//     return function(value){
//         return value* multiplier;;
//     }
//  }

//  const double = createMultiplier(2)
//  const triple = createMultiplier(3);

//  console.log(double(5))
//  console.log(triple(3))

 // Maintainig State --> interesting
 function createLogger() {
    let logs = []
    return function(message) {
        logs.push(message)
        console.log(logs.join('\n'))
    }
 }

 const logger = createLogger()
 logger("First Log")
 logger("Second Log")

 // 4. Asynchronous Programming

 // Closures are crucial in asyncronous programmming, where callbacks and promises are prevalent. They help preserve the state and context when aynchronous operations complete.

//  function fetchData(url) {
//     fetch(url).then(response => {
//         response.json().then(data => {
//             console.log(data);
//         })
//     })
//  }

//  fetchData('https://google.com');

/* 5 Higher-Order Functions

closures are fundamental for higher-order functions, functions that return other functions or take functions as arguments. They are a core concept in functional programming.
*/

// function add(a) {
//     return function(b) {
//         return a+b;
//     }
// }
// const addFive = add(5);

// console.log(addFive(15))


/* Event Handlers and Callbacks
In event driven programming, closures are often used to maintain context and state within event handlers and callbacks. 

function setupHandler() {
    let count = 0;
    document.getElementById('myButton').addEventListener('click', function() {
        count++;
        console.log(`Button clicked ${count} times`);
    });
}

setupHandler();


7. Module Patten Closures are used to create modules, a way to structure code by encapsulating related functions and variables, and exposing only what is necessary.

*/

const myModule = (function() {
    let privateVariable = 'secret';
    function privateFunction() {
        console.log(privateVariable);
    }
    return {
        publicMethod: function() {
            privateFunction();
        }
    }
})();

myModule.publicMethod();

