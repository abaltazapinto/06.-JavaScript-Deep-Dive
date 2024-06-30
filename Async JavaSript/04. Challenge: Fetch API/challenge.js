// Challenge: 
// The JSON Placeholder API has /users endpoint, 
// just like the one we saw in the tutorial for /posts
// Get the user with ID 3 and log their name and company they work for.
// Handle errors if something does not quite work. 

// Here's the endpoint: https://jsonplaceholder.typicode.com/users/3


async function fecthUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
}

fetch('https://jsonplaceholder.typicode.com/users/3')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));