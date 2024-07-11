// Challenge: 
// Rewrite the GET API call from the previous challenge using async-await

// aync has a function within it that is going to be called
// await is going to wait for the promise to be resolved

// passar o await fetch para data.json

// Challenge:
async function getUser3() {
  try {
    const response  = await fetch(`https://jsonplaceholder.typicode.com/users/3`)
    const data = await response.json();
    console.log(`${data.name} works for ${data.company.name}`);
  }
  catch {

    console.error('Could not find the user, please check the username')
  }
} 

getUser3();

//solution for the scrimba challenge
atch(err => console.error(err))
  
async function getUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/3');
    if (!response.ok) {
      throw new Error(response.status);
    }
    const person = await response.json(); 
    console.log(person);    
  }
    catch (error) {
      console.log(error);
  }

}

getUser()

