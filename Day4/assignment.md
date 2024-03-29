# Is JSX mandatory for React?

No, JSX (JavaScript XML) is not mandatory for building React applications, but it is a popular and recommended syntax. JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It allows you to write HTML-like code in your JavaScript files, making it easier to describe the structure of your React components.

While JSX is widely used and generally considered more readable and expressive, you can also use plain JavaScript to create React elements without JSX. React.createElement is a function provided by React that allows you to create React elements programmatically using JavaScript.

Here's an example of creating a simple React element without JSX:

```js
const element = React.createElement('div', null, 'Hello, React!');
```
However, JSX is the more prevalent and recommended way to write React components due to its conciseness and similarity to HTML, making it easier for developers to understand and maintain their code. If you're just starting with React, it's highly recommended to get familiar with JSX.


# Is ES6 mandatory for React?

No, ES6 (ECMAScript 2015) is not mandatory for building React applications, but it is highly recommended. React itself does not depend on any specific version of ECMAScript, but many of the features introduced in ES6 and later versions make React development more convenient and expressive.

Some ES6 features commonly used in React development include:

1. **Arrow Functions:** A concise syntax for writing function expressions.

   ```javascript
   const myFunction = () => {
     // code
   };
   ```

2. **Classes:** ES6 introduced class syntax, and React components can be defined using class components.

   ```javascript
   class MyComponent extends React.Component {
     // component code
   }
   ```

3. **Destructuring Assignment:** Easily extract values from objects or arrays.

   ```javascript
   const { prop1, prop2 } = myObject;
   ```

4. **Let and Const:** Block-scoped variables, providing an alternative to `var`.

   ```javascript
   let myVariable = 123;
   const myConstant = 456;
   ```

5. **Template Literals:** A more concise way to concatenate strings.

   ```javascript
   const name = 'John';
   const greeting = `Hello, ${name}!`;
   ```

While you can still write React applications using older JavaScript syntax, using ES6 and later features can lead to cleaner and more maintainable code. Most modern React projects leverage ES6 and beyond for development. Additionally, many of the tools and libraries commonly used in the React ecosystem, like Babel, assume or recommend the use of newer JavaScript features.


# How can I write comments in JSX?

In JSX, you can write comments using curly braces `{}` and the `/* */` syntax from JavaScript. Here are a couple of ways to write comments in JSX:

1. **Inline Comments:**

```jsx
const MyComponent = () => {
  return (
    <div>
      {/* This is an inline comment */}
      <p>Hello, World!</p>
    </div>
  );
};
```

2. **Multiline Comments:**

```jsx
const MyComponent = () => {
  return (
    <div>
      {/* 
        This is a multiline comment
        spanning multiple lines.
      */}
      <p>Hello, World!</p>
    </div>
  );
};
```

It's important to note that JSX comments are treated as expressions, so they must be enclosed in curly braces `{}`. The content inside the curly braces is then treated as JavaScript code.

In addition to the `{/* */}` syntax, if you are inside a JavaScript expression (within curly braces), you can use JavaScript-style comments:

```jsx
const MyComponent = () => {
  const message = (
    <div>
      {/* Single-line JavaScript-style comment */}
      <p>Hello, World!</p>
    </div>
  );

  return message;
};
```

Remember that while comments are useful for documentation and explanation, it's essential to maintain a balance and not overuse them, as clear and self-explanatory code is generally preferred.


# What is <React.Fragment></React.Fragment> and <></> ?

In React, `<React.Fragment>` and `<>...</>` are both used to create a wrapper or container for multiple elements without introducing an additional DOM element. They are especially useful when you need to return multiple elements from a component, but you don't want to add an extra div or another container element to the DOM.

### `<React.Fragment>`:

```jsx
import React from 'react';

const MyComponent = () => {
  return (
    <React.Fragment>
      <p>Hello</p>
      <p>World</p>
    </React.Fragment>
  );
};
```

### `<>...</>` (Short Syntax for Fragments):

In React 16.2 and later versions, you can use the short syntax `<>...</>` as a shorthand for `<React.Fragment>...</React.Fragment>`:

```jsx
import React from 'react';

const MyComponent = () => {
  return (
    <>
      <p>Hello</p>
      <p>World</p>
    </>
  );
};
```

Using fragments helps keep your JSX cleaner and avoids unnecessary nesting in the DOM. When these components are rendered, they won't create an additional wrapping element in the DOM; they will only render the child elements.

Choose between `<React.Fragment>` and `<>...</>` based on your preference and the React version you are using. The short syntax (`<>...</>`) is more concise and often preferred when you don't need to assign keys or add other props to the fragment.



# What is Virtual DOM?
The Virtual DOM (Document Object Model) is a concept used in the React library for optimizing the performance of web applications. It is a lightweight, in-memory representation of the actual DOM elements on a web page. React uses the Virtual DOM to efficiently update the user interface by minimizing the number of direct manipulations to the real DOM, which can be a costly operation in terms of performance.

Here's how the Virtual DOM works in React:

1. **Component Rendering:**
   - When a React component renders, it generates a Virtual DOM tree representing the UI elements.

2. **Difference Calculation:**
   - When a component's state or props change, React creates a new Virtual DOM tree for that component.

3. **Reconciliation:**
   - React then compares the new Virtual DOM tree with the previous one to identify the differences (diffing).

4. **Update:**
   - After identifying the differences, React calculates the most efficient way to update the real DOM to reflect the changes.

5. **Minimal Updates to Real DOM:**
   - Instead of updating the entire real DOM, React updates only the specific parts that have changed.

The Virtual DOM provides several advantages:

- **Performance Optimization:** Manipulating the Virtual DOM is faster than directly manipulating the real DOM. React minimizes the number of changes to the actual DOM, resulting in improved performance.

- **Batched Updates:** React can batch multiple changes to the Virtual DOM and apply them to the real DOM in a single update. This helps reduce browser reflows and repaints.

- **Declarative Syntax:** React allows developers to write UI code in a declarative manner, specifying how the UI should look based on the current state. React takes care of updating the DOM to match the desired state.

While the term "Virtual DOM" is often associated with React, other libraries and frameworks may also use similar concepts to optimize DOM manipulation and improve application performance.



# What is Reconciliation in React?
The algorithm React uses to diff one tree with another to determine which parts need to be changed.
Reconciliation in React refers to the process of updating the actual DOM to match the changes made to the Virtual DOM. When a React component's state or props change, a new Virtual DOM tree is created, and React needs to determine how to efficiently update the real DOM to reflect these changes.

The reconciliation process involves three main steps:

1. **Diffing (Finding the Differences):**
   - React compares the new Virtual DOM tree with the previous one to identify the differences between the two. This process is known as "diffing." React aims to minimize the number of changes needed to update the real DOM.

2. **Reconciliation Algorithm:**
   - React uses a reconciliation algorithm to determine the most efficient way to update the real DOM based on the identified differences. The goal is to make the updates with the least amount of impact on performance.

3. **Update the Real DOM:**
   - Once React determines the optimal set of changes, it updates the real DOM accordingly. This involves adding, removing, or updating specific elements to reflect the changes in the Virtual DOM.

React's reconciliation process is a key factor in the library's performance optimization. It helps ensure that only the necessary changes are made to the DOM, reducing the impact on the application's speed and responsiveness.

It's worth noting that React's reconciliation is a depth-first, recursive process. React traverses the Virtual DOM tree and compares elements in a hierarchical manner. While this process is efficient for many scenarios, developers need to be mindful of potential performance bottlenecks in extremely deep component trees or situations with frequent updates. In such cases, optimizations like the use of keys for elements can be employed to aid the reconciliation process.


# Why we need keys in React? When do we need keys in React?

In React, keys are used to identify and keep track of individual elements in a collection (such as an array) rendered by a component. Keys play a crucial role in the reconciliation process, helping React efficiently update the real DOM when elements are added, removed, or reordered. Here's why keys are important and when you need them in React:

### 1. **Efficient Reconciliation:**
   - When a component's state or props change, React creates a new Virtual DOM representation of the component's UI. During the reconciliation process, React compares the new Virtual DOM with the previous one and identifies the differences (diffing). Keys help React recognize which elements have changed, been added, or been removed, enabling efficient updates to the real DOM.

### 2. **Preserving Component State:**
   - Keys help React preserve the state of components during updates. When elements are re-rendered due to a change in state or props, React uses keys to match old and new elements. This matching process ensures that the state of a component is maintained, even if its position in the array changes.

### 3. **Optimizing Performance:**
   - Without keys, React may need to recreate the entire DOM subtree when elements are reordered or removed. This can result in inefficient DOM manipulations and negatively impact performance. Keys help React identify the minimal set of changes needed to update the DOM, reducing the overall computational cost.

### When Do You Need Keys:

1. **When Rendering Lists:**
   - Keys are commonly used when rendering lists of elements in React. This includes iterating over an array of data and creating a React element for each item in the array. The keys should be unique among siblings.

   ```jsx
   const myList = [/* array of items */];

   const MyComponent = () => {
     return (
       <ul>
         {myList.map(item => (
           <li key={item.id}>{item.name}</li>
         ))}
       </ul>
     );
   };
   ```

2. **Dynamic Element Creation:**
   - When dynamically creating elements, such as in a loop or map function, keys help React identify each element uniquely. This is crucial for efficient updates and maintaining component state.

3. **Reordering Elements:**
   - If you anticipate reordering elements in a list, providing keys helps React understand how the elements map between renders and reduces the likelihood of unnecessary re-renders.

While using keys is a common and recommended practice, it's important to note that keys should be stable, unique, and predictable. Avoid using array indices as keys if the order of items may change, as this can lead to unintended behavior. Choosing appropriate and meaningful keys is essential for the correct functioning of React's reconciliation process.



# Can we use index as keys in React?
While it is possible to use the array index as keys in React, it's generally not recommended, and there are important considerations to keep in mind. Using the array index as keys may lead to unexpected behavior and issues in certain scenarios. Here's why:

1. **Stability of Keys:**
   - React relies on stable and unique keys to efficiently update the Virtual DOM during the reconciliation process. If the order of items in the array changes, and you are using array indices as keys, React may incorrectly assume that the elements have been rearranged or changed when, in fact, they have not.

2. **Reordering and Adding Elements:**
   - When elements are reordered or new elements are added to the beginning or middle of the array, using array indices as keys can lead to incorrect rendering and potential performance issues. React may not be able to distinguish between elements that have moved and elements that are genuinely new.

   ```jsx
   // Example with array indices as keys
   const MyComponent = ({ items }) => {
     return (
       <ul>
         {items.map((item, index) => (
           <li key={index}>{item}</li>
         ))}
       </ul>
     );
   };

   // If items are reordered or new items are added, the keys might not be stable.
   ```

3. **Component State Preservation:**
   - If your components have internal state, using array indices as keys can lead to unintentional state mismatches. React relies on keys to identify and match elements between renders. If keys change due to reordering, React may recreate components, potentially leading to the loss of local state.

To address these issues, it's recommended to use stable and unique identifiers as keys whenever possible. If your data items have unique identifiers (such as IDs), use those as keys instead of array indices. This ensures that keys remain stable even if the order of items changes.

```jsx
// Example with unique IDs as keys
const MyComponent = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};
```

By using stable and unique keys, you help React accurately identify elements during the reconciliation process, ensuring efficient updates and preserving component state when needed.


# What is props in React? Ways to pass Props.
In React, "props" is a short form of "properties," and it refers to the mechanism used for passing data from a parent component to a child component. Props are a fundamental concept in React, allowing components to be dynamic and reusable. They enable the flow of information from one part of the application to another.

### Defining and Passing Props:

1. **Defining Props:**
   - In a parent component, you can define props by adding attributes to child components within JSX.

   ```jsx
   // ParentComponent.jsx
   import React from 'react';
   import ChildComponent from './ChildComponent';

   const ParentComponent = () => {
     const data = "Hello from Parent";

     return <ChildComponent propValue={data} />;
   };

   export default ParentComponent;
   ```

2. **Accessing Props in Child Component:**
   - In the child component, you can access the passed props using the `props` object.

   ```jsx
   // ChildComponent.jsx
   import React from 'react';

   const ChildComponent = (props) => {
     return <p>{props.propValue}</p>;
   };

   export default ChildComponent;
   ```

   Here, `propValue` is the prop passed from the parent to the child.

### Ways to Pass Props:

1. **Direct Assignment:**
   - You can directly assign values to props when rendering a component.

   ```jsx
   // ParentComponent.jsx
   import React from 'react';
   import ChildComponent from './ChildComponent';

   const ParentComponent = () => {
     return <ChildComponent propValue="Hello from Parent" />;
   };

   export default ParentComponent;
   ```

2. **Dynamic Values:**
   - You can pass dynamic values or variables as props.

   ```jsx
   // ParentComponent.jsx
   import React from 'react';
   import ChildComponent from './ChildComponent';

   const ParentComponent = () => {
     const dynamicData = "Dynamic Value";

     return <ChildComponent propValue={dynamicData} />;
   };

   export default ParentComponent;
   ```

3. **Passing Functions:**
   - Props can also be functions. This is useful for allowing child components to communicate with their parent.

   ```jsx
   // ParentComponent.jsx
   import React from 'react';
   import ChildComponent from './ChildComponent';

   const ParentComponent = () => {
     const handleButtonClick = () => {
       alert('Button Clicked!');
     };

     return <ChildComponent onClick={handleButtonClick} />;
   };

   export default ParentComponent;
   ```

   ```jsx
   // ChildComponent.jsx
   import React from 'react';

   const ChildComponent = (props) => {
     return <button onClick={props.onClick}>Click me</button>;
   };

   export default ChildComponent;
   ```

Props are read-only, meaning that a child component cannot modify the props it receives. If a child needs to communicate changes back to its parent, the parent can pass down functions as props, and the child can call those functions when needed.




# What is a Config Driven UI ?
A Config-Driven UI refers to an approach in software development where the user interface (UI) of an application is primarily defined and controlled by configuration or data rather than being hardcoded in the application's codebase. In this approach, the UI elements, their appearance, behavior, and layout are determined by configuration files or data structures, allowing for greater flexibility, customization, and dynamic updates without modifying the source code.

Key characteristics of a Config-Driven UI:

1. **Separation of UI Configuration and Code:**
   - The UI configuration is kept separate from the application code. This separation allows for easier maintenance, updates, and customization of the UI without requiring changes to the underlying logic.

2. **Flexibility and Customization:**
   - Users or administrators can easily customize the UI by adjusting the configuration parameters. This flexibility is particularly valuable in applications where different instances or deployments may require distinct UI variations.

3. **Dynamic Updates:**
   - Changes to the UI can be applied dynamically without the need for redeploying or recompiling the application. This is beneficial for scenarios where quick adjustments or A/B testing of UI variations are necessary.

4. **Adaptability to Changing Requirements:**
   - Config-Driven UIs are well-suited for applications with evolving requirements. Instead of rewriting code to accommodate new UI elements or layouts, developers can update the configuration to reflect the changes.

5. **Reduced Development Time:**
   - Developers can focus on building core application features and business logic, while UI configuration can be handled separately. This can lead to faster development cycles and easier maintenance.

6. **Declarative Approach:**
   - Config-Driven UI often follows a declarative approach, where the configuration describes "what" the UI should look like, and the underlying framework or runtime takes care of the "how" to render it.

7. **Cross-Platform Compatibility:**
   - Config-Driven UIs can enhance cross-platform compatibility by allowing the configuration to adapt to different devices or screen sizes without modifying the application code.

Examples of configuration sources in a Config-Driven UI might include JSON files, YAML files, databases, or API responses. The configuration may include details about component structure, styling, event handling, and other aspects of the user interface.

While Config-Driven UIs offer advantages in terms of flexibility and maintainability, they may also introduce challenges such as ensuring the security of configuration data and maintaining clarity in the separation between code and configuration. The choice to adopt a Config-Driven UI approach depends on the specific requirements and goals of the application.



# What is the difference between named export, default export and * as export?
In JavaScript, when you're working with modules (files that can be imported and exported), you have several ways to export functionality. Here are the main types of exports:

1. **Named Export:**
   - This involves exporting specific functions, objects, or variables by giving them a name.
   - You use the `export` keyword followed by the name of the function, object, or variable you want to export.
   - Example:
     ```javascript
     // module.js
     export const foo = 'Hello';
     export function bar() {
       console.log('World');
     }
     ```

   - To import the named exports in another file, you use curly braces `{}`:
     ```javascript
     // anotherFile.js
     import { foo, bar } from './module.js';
     console.log(foo); // Outputs: Hello
     bar(); // Outputs: World
     ```

2. **Default Export:**
   - This involves exporting a single value or functionality as the default export for a module.
   - You use the `export default` syntax followed by the value or function you want to export as the default.
   - Example:
     ```javascript
     // module.js
     const myDefaultExport = 'Default export';
     export default myDefaultExport;
     ```

   - To import the default export in another file, you don't need curly braces:
     ```javascript
     // anotherFile.js
     import myDefaultExport from './module.js';
     console.log(myDefaultExport); // Outputs: Default export
     ```

3. **`* as` Export:**
   - This involves exporting all exports from a module as properties of an object using the `* as` syntax.
   - It's also known as a namespace import.
   - Example:
     ```javascript
     // module.js
     export const a = 1;
     export const b = 2;
     ```

   - To import all exports as properties of an object in another file:
     ```javascript
     // anotherFile.js
     import * as myModule from './module.js';
     console.log(myModule.a); // Outputs: 1
     console.log(myModule.b); // Outputs: 2
     ```

In summary:
- Named exports allow you to export multiple values from a module and import them individually.
- Default exports allow you to export a single value from a module and import it without curly braces.
- `* as` exports allow you to import all exports from a module as properties of an object.




# What is the importance of config.js file?
The importance of a `config.js` file depends on the context in which it is used. In general, a `config.js` file is often employed to centralize and manage configuration settings for a software application. Here are some reasons why having a `config.js` file can be beneficial:

1. **Centralized Configuration:**
   - A `config.js` file allows you to centralize all configuration settings in one place. This makes it easier to manage and update settings without having to search through the entire codebase.

2. **Separation of Concerns:**
   - By keeping configuration details in a separate file, you can achieve a better separation of concerns in your code. The business logic of your application can be separated from the configuration details, improving code organization and maintainability.

3. **Environment-specific Configurations:**
   - You can use a `config.js` file to store environment-specific configurations, such as database connection strings, API keys, and other settings that might vary between development, testing, and production environments. This helps in maintaining a consistent codebase across different environments.

4. **Ease of Configuration Changes:**
   - When using a `config.js` file, making changes to configuration settings becomes easier. Instead of modifying values scattered throughout the codebase, you only need to update the `config.js` file.

5. **Security:**
   - Sensitive information, such as API keys or database credentials, can be stored in the `config.js` file. This helps in keeping sensitive information separate from the main codebase and allows for easier management of access control.

6. **Version Control:**
   - Configuration files like `config.js` are typically included in version control systems. This ensures that changes to configuration settings are tracked and can be reverted if necessary.

7. **Readability:**
   - A `config.js` file can improve the readability of your code by providing a clear place to look for and understand the configuration settings used in the application.

Here's a simple example of what a `config.js` file might look like:

```javascript
// config.js
module.exports = {
  apiBaseUrl: 'https://api.example.com',
  apiKey: 'your-api-key',
  databaseConfig: {
    host: 'localhost',
    username: 'db_user',
    password: 'db_password',
    database: 'my_database'
  }
};
```

In your application code, you can then import and use these configurations as needed. Keep in mind that the actual structure and content of a `config.js` file may vary depending on the specific needs of your project.




# What are React Hooks?
React Hooks are functions that allow developers to use state and other React features in functional components, which were traditionally stateless. They were introduced in React version 16.8 to address the complexity and reuse issues associated with class components.

Prior to the introduction of Hooks, state and lifecycle methods were only available in class components. Functional components were stateless and didn't have access to features like `state`, `componentDidMount`, `componentDidUpdate`, etc. React Hooks provide a way to use state and other React features in functional components without the need for class components.

Here are some commonly used React Hooks:

1. **`useState`:**
   - `useState` allows functional components to manage local state. It returns an array with two elements: the current state value and a function that lets you update it.
   ```javascript
   import React, { useState } from 'react';

   function ExampleComponent() {
     const [count, setCount] = useState(0);

     return (
       <div>
         <p>You clicked {count} times</p>
         <button onClick={() => setCount(count + 1)}>
           Click me
         </button>
       </div>
     );
   }
   ```

2. **`useEffect`:**
   - `useEffect` is used to perform side effects in functional components. It's similar to lifecycle methods like `componentDidMount` and `componentDidUpdate` in class components.
   ```javascript
   import React, { useState, useEffect } from 'react';

   function ExampleComponent() {
     const [data, setData] = useState(null);

     useEffect(() => {
       // Perform side effect (e.g., data fetching) here
       fetchData().then(result => setData(result));
     }, []); // Empty dependency array means this effect will run once after the initial render

     return <div>{data}</div>;
   }
   ```

3. **`useContext`:**
   - `useContext` allows functional components to subscribe to React context without introducing a nesting component.
   ```javascript
   import React, { useContext } from 'react';
   import MyContext from './MyContext';

   function ExampleComponent() {
     const contextValue = useContext(MyContext);
     return <div>{contextValue}</div>;
   }
   ```

4. **`useReducer`:**
   - `useReducer` is a hook that is usually preferable to `useState` when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.
   ```javascript
   import React, { useReducer } from 'react';

   function reducer(state, action) {
     switch (action.type) {
       case 'increment':
         return { count: state.count + 1 };
       default:
         throw new Error();
     }
   }

   function ExampleComponent() {
     const [state, dispatch] = useReducer(reducer, { count: 0 });

     return (
       <div>
         <p>You clicked {state.count} times</p>
         <button onClick={() => dispatch({ type: 'increment' })}>
           Click me
         </button>
       </div>
     );
   }
   ```

These are just a few examples, and there are more hooks available for different use cases. Hooks provide a more direct API to the React concepts and allow for better code organization and reusability in functional components.




# useState
The `useState` hook in React is used to add state to functional components. Before the introduction of hooks, functional components were stateless, meaning they didn't have the ability to manage local state. The `useState` hook allows functional components to declare and manage state variables, enabling them to hold and update state within the component.

Here's a breakdown of the key uses of the `useState` hook:

1. **Declaring State Variables:**
   - Use `useState` to declare state variables within a functional component. The `useState` function takes an initial value as an argument and returns an array with two elements: the current state value and a function to update that value.

   ```javascript
   import React, { useState } from 'react';

   function ExampleComponent() {
     // Declaring a state variable 'count' with an initial value of 0
     const [count, setCount] = useState(0);

     // ...
   }
   ```

2. **Updating State:**
   - The second element of the array returned by `useState` is a function (`setCount` in the example above) that is used to update the state variable. When the function is called, React will re-render the component with the new state value.

   ```javascript
   // Updating state in response to user interaction
   <button onClick={() => setCount(count + 1)}>
     Increment
   </button>
   ```

3. **Handling Multiple State Variables:**
   - You can use the `useState` hook multiple times to manage different state variables within a component. Each call to `useState` creates a separate state variable and its corresponding updater function.

   ```javascript
   const [name, setName] = useState('John');
   const [age, setAge] = useState(25);
   ```

4. **Functional Updates:**
   - `useState` also supports functional updates. Instead of passing the new state value directly, you can provide a function that takes the previous state as an argument and returns the new state.

   ```javascript
   setCount(prevCount => prevCount + 1);
   ```

5. **Initializing State Lazily:**
   - You can initialize state lazily by providing a function as the argument to `useState`. This can be useful when the initial state depends on the result of a computation.

   ```javascript
   const [data, setData] = useState(() => fetchDataFromServer());
   ```

6. **Managing Complex State:**
   - For more complex state logic, consider using the `useReducer` hook. While `useState` is suitable for independent state values, `useReducer` is often more suitable for managing complex state objects or logic.

Here's a complete example demonstrating the use of `useState`:

```javascript
import React, { useState } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

In this example, the component maintains a `count` state variable, and each click on the button increments the count, causing the component to re-render with the updated count value.




## References
1. [React without JSX](https://legacy.reactjs.org/docs/react-without-jsx.html)
2. [Virtual DOM](https://legacy.reactjs.org/docs/faq-internals.html)
3. [Reconciliation](https://legacy.reactjs.org/docs/reconciliation.html)
4. [React Fiber Architecture](https://github.com/acdlite/react-fiber-architecture)
5. [React without ES6](https://legacy.reactjs.org/docs/react-without-es6.html)
6. [Index Keys as Anti Pattern](https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/)
