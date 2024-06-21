"use strict";

// message = "hello world";

// browser - window
// server - global

//console.log(window.message);

// 1) sloopy  mode - default
// 2) strict mode - we can change. throws more error, prevents pitfalls

//hoisting - acces a variable before to been declarated ????
var age;
console.log(age);
age = 26;
let startDate = new Date('5-5-2024');
let endDate = new Date();

let learning = endDate - startDate;

let days = Math.floor(learning / (1000 * 60 * 60 * 24));
let hours = Math.floor((learning % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

document.write(`You have invested ${days} days and ${hours} hours in learning.`);

console.log(learning);