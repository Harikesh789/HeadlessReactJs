// const heading = React.createElement(
//     "h1",
//     { id: "heading" },
//     "Hello World From React!"
// );
//  import React from "react";
//  import  ReactDOM from "react-dom/client";
// const parent = React.createElement("div", { id: "parent" }, [
//     React.createElement("div", { id: "child1" },
//         [React.createElement("h1", {}, "This is headless react 🚀"),
//         React.createElement("h2", {}, "This is from h2 child")]),
//     React.createElement("div", { id: "child2" },
//         [React.createElement("h1", {}, "This is from h1 child"),
//         React.createElement("h2", {}, "This is from h2 child")])])
// const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(heading);
// root.render(parent);
import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object =>HTMLElement(render)

const heading = React.createElement("h1", { id: "heading" }, "Headless reactJs 🚀")
// We can create element using JSX
//JSX (transpiled before it reaches the JS)- PARCEL - Babel
// JSX => React.createElement =>ReactElement = JS object => HTMLElement(render)
// Babel is converting your JSX to react.createelement
const jsxheading = <h1 id="heading">This is JSX headless ReactJs</h1>
// root.render(heading)

//React Components
//1) Class Based components- old way to writting code
//2) Functional components- new way to writting code =>just a javascript function which return some piece of jsx
//JSX is the react element

const Title = ()=>(
        <h1 className="head" tabIndex="5">This is title component</h1>

)

const HeadingComponent = ()=>(
    <div id="container">
        <Title />
        <h1 className="heading">Headless ReactjS functional component</h1>
    </div>

)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<HeadingComponent />)