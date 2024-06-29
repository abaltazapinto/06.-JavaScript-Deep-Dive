# Getting Started
Install the dependencies and run the project
```
npm install
npm start
```

Head over to https://vitejs.dev/ to learn more about configuring vite
## About Scrimba

At Scrimba our goal is to create the best possible coding school at the cost of a gym membership! 💜
If we succeed with this, it will give anyone who wants to become a software developer a realistic shot at succeeding, regardless of where they live and the size of their wallets 🎉
The Frontend Developer Career Path aims to teach you everything you need to become a Junior Developer, or you could take a deep-dive with one of our advanced courses 🚀

- [Our courses](https://scrimba.com/allcourses)
- [The Frontend Career Path](https://scrimba.com/learn/frontend)
- [Become a Scrimba Pro member](https://scrimba.com/pricing)

Happy Coding!


Intoduction to Asynchronous JavaScript and Network requests

IN javascript, asyncronous operations allow you to perform tasks sucha as fetching data from a server without freexing the entire application., This is a crucial for creating smooth , responsive web applications. One of the ,most common asyncronous operations inJavaScript is making network resquests o APIs.

**Key Concepts**
1. **Asyncronous Programming: This involves writing code that can perform tasks in the background without blocking the main thread** Javascript achieves this using callbacks, promises, and async/await.
2. **Callbcks: ** Function passed as arguments to other functions, executed afteer an asynchronous operation has completed.
3. **Promises:** Objects representing the eventual completion (or failure) of an aynchronous operation and its resulting value.
4. Async/Await: Syntatic sugar over promises, providing a more readable and syncronous-looking way to write asyncronous code.

**Network Requests**
Network requests in Javascript are commonly made using the Fetch API, which return a promise that resolves to the response of the request.

Fetch API 

The Fetch API provides an esay way to fetch resources across the network. Here's the basic syntax:

```
fetch(url, options)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error: ', error));
```