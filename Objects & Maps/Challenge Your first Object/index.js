// Method properties are functions inside objects
const myObject = {
    firstProperty: "Some value",
    methodProperty() {
        console.log("I am a method property")
    }
}

// Object property shorthand is used when a name of some variables 
// matches the name of a property inside your object

const skyColour = 'Blue'

const sky = {
    skyColour, // used object property shorthand, instead of writing skyColour: skyColour
    clouds: false
}

// Challenge: 
// 1. Create three variables - bar, cafe, restaurant - and set their values to a bar, a cafe and a restaurant in your city
// 2. Create an object - favouritePlaces - and populate it with your variables from task 1
// 3. If you're not already using the object property shorthand, refactor your code to do so
// 4. Create a method on the object - greeting() -  that logs out a message to the console
// 5. Invoke the greeting() method and also log out your favourite restaurant to the console

// Challenge: 
// 1. Create three variables - bar, cafe, restaurant - and set their values to a bar, a cafe and a restaurant in your city
// 2. Create an object - favouritePlaces - and populate it with your variables from task 1
// 3. If you're not already using the object property shorthand, refactor your code to do so
// 4. Create a method on the object - greeting() -  that logs out a message to the console
// 5. Invoke the greeting() method and also log out your favourite restaurant to the console

const bar = "Bar Boca";
const cafe = "Aku Aku";
const restaurant = "Colonel Mustard";

const favouritePlaces = {
    bar: bar,
    cafe: cafe,
    restaurant: restaurant
}

console.log(favouritePlaces)

r = Math.random()

console.log(r)