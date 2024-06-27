// const post = document.querySelector(".post");
// post.style.backgroundColor = "lightblue";

// console.log(post.className)

// //post.classList.remove("post");
// //post.classList.add("new-post");
// //post.classList.toggle("new-post");

// //UNdesrtand wor with events.

// const post = document.querySelector(".post");
// post.addEventListener('click', () => {
//     console.log(`do you want to edit the post?`)
// //   console.log(`You clicked the ${event.target}`);
// // })

// const posts = document.querySelectorAll(".post");
// posts.forEach(post => {  
//   post.addEventListener('click', event => {
//   //   console.log(event.target);  
//     console.log('Do you want to edit this post?')
//   });
// })

document.body.addEventListener('mouseout', event => {
    if (!event.target.closest('.post')) return;
    console.log('Do you want to edit this post?')  
  })