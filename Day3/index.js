import React from 'react';
import ReactDOM from 'react-dom/client';

// React.createElement generates an Object => which is converted into HTML and puts it up on DOM

// JSX => uses React.createElement then it is converted to object and that object is then converted into HTML which is then rendered in the DOM

// JSX Expression
const heading = (
    <h1 id="hello" key="h1">Hello React</h1>
)

// Babel converts this JSX code into the one containing React.createElement

// Advantages of JSX : Readability, Developer friendly, Syntactical sugar, less code, no repetition



// React element is rendered just by their name -> root.render(heading2);
//whereas functional component is rendered like this -> root.render(<HeaderComponent />)

//This is a React Element
const heading2 = (
    <h2 id="title" key="h2">HELLO REACT</h2>
);

const Hello = () => {
    return (
        <h3 id="title">HELLO EVERYONE</h3>
    )
}


// React Component
// Functional Component (Normal JS function which returns JSX or some piece of react element) - NEW (I will use this most of the time)

//Component's name always starts with a capital letter (it is not mandatory but is considered a good practice)
const HeaderComponent = () => {
    return (
        <div>
            {heading}   
            <Hello />
            {Hello()}
            <h1>Hello React functional component</h1>
            <h2>This is a h2 tag</h2>
        </div>
    )
};

//Just above we have used react element {heading} inside the functional component
// React element is put under curly braces to be used in functional component
// Suppose you want to put functional comp inside a functional component then just write the component name with < /> braces
// like <Title /> or you can also write like this -> {Title()} to use it inside another functional component

// If i have to use a component inside a component it is known as Component Composition or Composing Components

// Class Based Component - OLD (Will cover this too)


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);