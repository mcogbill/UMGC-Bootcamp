### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
Callbacks, Promises, Async/Await, Event Emitters.

- What is a Promise?
A Promise represents a value that may be available now, or in the future, or never. It has three states: pending, fulfilled, or rejected.

- What are the differences between an async function and a regular function?
Async functions provide a convenient way to work with asynchronous code in JavaScript, allowing for cleaner and more readable code compared to using callbacks or Promises directly.

- What is the difference between Node.js and Express.js?
Node.js is the runtime environment that allows you to execute JavaScript code on the server-side, while Express.js is a framework built on top of Node.js that provides a set of tools and utilities for building web applications and APIs more efficiently.

- What is the error-first callback pattern?
The error-first callback pattern, also known as the "Node.js callback pattern" or "error-first callback style," is a convention commonly used in Node.js for handling asynchronous operations.

- What is middleware?
Middleware refers to functions or pieces of code that are executed in between the incoming request and the outgoing response in a web application or framework.

- What does the `next` function do?
The next function is a callback function that is passed to middleware functions. It is used to pass control to the next middleware function in the stack.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
Performance: The code makes three sequential HTTP requests using await, which means each request waits for the previous one to complete before starting. This can significantly impact performance, as the requests are not executed concurrently.
Structure: The code structure is not optimal. Since the HTTP requests are independent of each other, they can be executed concurrently to improve performance.
Naming: Variable names like elie, joel, and matt are not very descriptive. It's better to use meaningful names that convey the purpose of the data being fetched.

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
