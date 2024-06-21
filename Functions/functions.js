// Challenge: Write a function splitBill() that lets you know how much 
// you need to pay to split any bill between you and your friends. 
// It should return a message with a number. 

// Write your code below:


function splitBill(price,persons){
    
    let eachperson = (price/persons).toFixed(2);
    let result = `You have to pay more an less ${eachperson}, because the total is ${price}, and we are ${persons} people.`

    return result;
}


// Testing your solution
console.log(splitBill(10, 3

))
console.log(splitBill(16, 4))
console.log(splitBill(350, 9))
