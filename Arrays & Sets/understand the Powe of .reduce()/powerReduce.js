const numbers = [1, 2, 3, 4, 5, 6];

// const double = numbers.reduce((accumulator, currentValue) => {
//     console.log('accumulator:', accumulator, 'currentValue:', currentValue)
//     return 2 * currentValue
// }, 2)



const double = numbers.reduce((acc, num) => {
    acc.push(num * 2)
    return acc; 
}, []);

console.log(double)
console.log('numbers', numbers);

const doubleNumbers = numbers.map(num => num * 2)
console.log(doubleNumbers) 

const higherThan3 = numbers.reduce((acc, num) => {
    if (num > 3) {
        acc.push(num)
    }
    return acc;
}
, []);

console.log(higherThan3)


const greaterNumbers = numbers.filter(num => num > 3);
console.log(greaterNumbers);


// n
const greaterNumbers2 = numbers.reduce((acc, num) => num > 3 ? acc.concat(num) : acc, []);
console.log(greaterNumbers1);