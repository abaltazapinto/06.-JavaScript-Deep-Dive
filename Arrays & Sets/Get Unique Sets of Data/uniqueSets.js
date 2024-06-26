const customerDishes = [
    "Chicken Wings",
    "Fish Sandwich",
    "Beef Stroganoff",
    "Grilled Cheese",
    "Blue Cheese Salad",
    "Chicken Wings",
    "Reuben Sandwich",
    "Grilled Cheese",
    "Fish Sandwich",
    "Chicken Pot Pie",
    "Fish Sandwich",
    "Beef Stroganoff"
  ];

 console.log(new Set([1,1,2,3,4]).size)

console.log(new Set([[1], [1], [3]]).size);

new Set(customerDishes).forEach(dish => console.log(dish));

const uniqueDishes = [...new Set(customerDishes)];
console.log(uniqueDishes)