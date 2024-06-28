// // callbacks -> promises

const { error } = require("console");

// // States of a promise:
// // pending 
// // fullfilled 
// // rejected.

// //promises tell the status

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => reject(Error('Promise failed')), 1000);
// }); //constructor

// console.log(promise);


// // promise.then(() => console.log('success')).catch(() => console.log('failure')); //methods

// // promise.then(value => console.log(value)).catch(error => console.error(error)); //methods

// promise
//     .then(value => console.log(value))
//     .catch(error => console.error(error)) //methods
//     .finally(() => console.log('Promise settled')); //methods
const promise = new Promise((resolve, reject) => {
navigator.geolocation.getCurrentPosition(position => {
    resolve(position);
    console.log('It worked!');
}, error => {
    reject(error);  }
);
});

promise.then(position => console.log(position))
    .catch(error => console.error(error))
    .finally(() => console.log('Done!'));