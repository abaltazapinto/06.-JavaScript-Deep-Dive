/* if we want to make a weather app
Api engine behing any application. API makes apps dynamic. 
Aplication programming interface: software to communicate with other software.
API is a set of rules that allows one software application to communicate with another.
window.navigator.geolocation.getCurrentPosition(position => console.log(position), error => console.error(error));

API - is a helpfull service.
REST API. ajax request // CRUD. 

rest api -- gives the euqiivalent with CRUD operations.
create - POST (what we want to do !!!)
read - GET (what we want to do !!!)
update - PUT / patch (what we want to modify!!!)
delete - DELETE .

fetch() - is a built-in browser function to make network requests.


http://jsonplaceholder.typicode.com/posts/

fecth(url) url - is a string representing the url we want to make a request to.



http://jsonplaceholder.typicode.com

// GET /posts/1 - single blog post
// */
// const blogPost = {
//     title: "Cool blog post",
//     body: "This is the body of the blog post",
//     userId: 1
// };

// fetch('http://jsonplaceholder.typicode.com/posts/1', {
//     method: "POST", 
//     headers: {
//         "Content-Type": "application/json"
//     }, 
//     body: JSON.stringify(blogPost)
// })
//     // .then(response => {
//     //     response.ok ? Promise.resolve(response) : Promise.reject(new Error('Failed to fetch')) //2XX status code ok
//     // }
//     .then(data => console.log(data.title))
//     .catch(error => console.error(error));




// fetch('https://jsonplaceholder.typicode.com/pots/1')
// .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);  
//     }
// })
// .then(data => console.log(data))
// .catch(error => console.error(error))

  // https://github.com/public-apis/public-apis

  const apiKey = 'a0a606d295961d25aeb3456611fc27ee'
const url = `https://api.marketstack.com/v1/tickers/aapl/eod/latest?access_key=${apiKey}`



async function fetchTickers() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  }
  
  fetchTickers();