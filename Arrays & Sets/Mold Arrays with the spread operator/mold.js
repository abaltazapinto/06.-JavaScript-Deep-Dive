const breakfastMenuIdeas = ["Buckwheat Pancakes"];
const dinnerMenuIdeas = ["Glazed Salmon", "Meatloaf", "American Cheeseburger"];

const allMenuIdeas = [
    ...breakfastMenuIdeas, 
    "Harvest Salad", 
    "Southern Fried Chicken",
    ...dinnerMenuIdeas
];
console.log(allMenuIdeas);
// const otherMenuIdeas = [...breakfastMenuIdeas, ...allMenuIdeas];
// console.log(otherMenuIdeas);

console.log(allMenuIdeas.slice(1, 4));


const saladIndex = allMenuIdeas.findIndex(idea => idea === 'Harvest Salad');

console.log(saladIndex);
const finalMenuIdeas = [
    ...allMenuIdeas.slice(0, saladIndex),
    "Garden Salad",
    ...allMenuIdeas.slice(saladIndex + 1)
  ]

  console.log(finalMenuIdeas);

const deleteSaladMenuIdeas = [
    ...allMenuIdeas.slice(0, saladIndex),
    ...allMenuIdeas.slice(saladIndex + 1)
  ]

  console.log(deleteSaladMenuIdeas);
