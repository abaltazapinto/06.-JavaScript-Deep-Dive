const finalMenuItems = [
    "American Cheeseburger",
    "Southern Fried Chicken",
    "Glazed Salmon"
  ];
  
  let [first, second] = finalMenuItems;
  console.log('before', { first },{ second });
  [second, first] = [first, second];
  console.log('after', { first },{ second });
  // let first = finalMenuItems[0];
  // let second = finalMenuItems[1];
  // let third = finalMenuItems[2];
  
  // console.log(first, second, third);

  /* using the rest operator, we can destructure the rest of the array into a variable */

  const [winner, ...losers] = finalMenuItems;

  console.log({ winner }, { losers });