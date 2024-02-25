### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it? React is a popular JavaScript library for building user interfaces, particularly for web applications. React is widely used for creating interactive and dynamic UI components.

- What is Babel? 
Babel is a popular JavaScript compiler that allows developers to write code using the latest ECMAScript (ES) standards and features, while ensuring compatibility with older browsers and environments that may not support those features natively.

- What is JSX?
JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows developers to write HTML-like code within JavaScript, particularly in React applications.

- How is a Component created in React?
In React, components are the building blocks of a user interface. They encapsulate the UI's structure and behavior into reusable pieces, allowing developers to create modular and maintainable code.

- What are some difference between state and props?
State: State is managed internally by a component. It is initialized and updated using setState() function (for class components) or the useState hook (for functional components). State represents the local mutable data for a component.
Props: Props (short for properties) are passed to a component from its parent component. They are immutable data that the parent component passes down to its children. Props are read-only for the component receiving them.

- What does "downward data flow" refer to in React?
"Downward data flow" in React refers to the principle that data should flow from parent components to their children components, rather than the other way around.

- What is a controlled component?
A controlled component in React is a form element (like <input>, <textarea>, or <select>) whose value is controlled by React's state.

- What is an uncontrolled component?
An uncontrolled component in React is a form element (such as <input>, <textarea>, or <select>) whose value is not directly controlled by React's state.

- What is the purpose of the `key` prop when rendering a list of components?
The key prop is used in React when rendering a list of components or elements. It serves as a unique identifier for each item in the list.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
Using array indexes as keys for rendering lists of components can lead to unpredictable behavior, performance issues, and accessibility concerns.

- Describe useEffect.  What use cases is it used for in React components?
useEffect is a built-in React hook that allows functional components to perform side effects. Side effects in React typically include data fetching, subscriptions, or manually changing the DOM in reaction to component lifecycle events. useEffect replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount in class components.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
useRef is a React Hook that allows you to create mutable references to elements or values in functional components. One of the key features of useRef is that changes to the .current property do not trigger a re-render of the component.

- When would you use a ref? When wouldn't you use one? You would use a ref in React when you need to access or manipulate a DOM element directly, when you need to store mutable values that persist between renders without causing re-renders, or when you need to interact with imperative APIs.

- What is a custom hook in React? When would you want to write one?
A custom hook in React is a JavaScript function that starts with the prefix "use" and leverages existing React hooks to enable custom behavior and logic to be reused across multiple components. Custom hooks allow you to extract and encapsulate stateful logic from components, promoting code reuse, readability, and maintainability.
