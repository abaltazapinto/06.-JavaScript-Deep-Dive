const nums = {
    1: 1,
    true: true
  };
  
  // const map1 = new Map([
  //   [1, 1],
  //   [true, true]  
  // ]);
  
  // map1.set('key', 'value');
  
  // map1.forEach((value, key) => {
  //   console.log(key, value);  
  // });
  
  const user1 = { name: "john" }
  const user2 = { name: "mary" }
  
  const secretKey1 = "asldjfalskdjf";
  const secretKey2 = "alksdjfakjsdf";
  
//   const secretKeyMap = new Map([
//     [user1, secretKey1],
//     [user2, secretKey2]  
// ]);
  // just for having a better solution where you need t use maps, over objects you can use the WeakMpa([])
  const secretKeyMap = new WeakMap([
    [user1, secretKey1],
    [user2, secretKey2]  
  ]);
  console.log(secretKeyMap) 
  const key = secretKeyMap.get(user1)
  console.log(key)

  const user = {
    name: "john",
    verified:true
  };

  const userMap = new Map ([
    ["name","john"],
    ["verified", true]
  ]);

  console.log(userMap.size)