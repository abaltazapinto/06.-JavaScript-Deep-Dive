const restaurants = [
    { name: 'Cap City Diner', milesAway: 2.2 },
    { name: 'Chop Shop', milesAway: 4.1 },
    { name: 'Northstar Cafe', milesAway: 0.9 },
    { name: 'City Tavern', milesAway: 0.5 },
    { name: 'Shake Shack', milesAway: 5.3 }
  ]

const results1 =  restaurants.filter(restaurant => restaurant.name.startsWith('C'))

 console.log(restaurants)

 const results = restaurants.find(restaurant => restaurant.name.toLowerCase().includes('northstar') && restaurant.milesAway < 3
)
console.log(results)
console.log(results1)
