// Challenge: 
// 1. Create an array - favouriteSongs[] -  and add your 3 favourite songs using push()

let favouriteSongs = [];

favouriteSongs.push("Wonderful Life, Smith & Burrows", "Brilhantes diamantes, Serial,Ace, Maze", "Come As You are, Nirvana")

// 2. Log out the last song in the array, and make it so that your solution will log out the last one regardless of how many items there are in the array
const lastSong = favouriteSongs.length - 1

console.log(favouriteSongs[lastSong])
// 3. Invoke the pop method on your created array. What values do you have left in the array? 

const newArray = [...favouriteSongs];
newArray.pop()

console.log(newArray)
console.log(favouriteSongs)