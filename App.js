// const heading = React.createElement(
//     "h1",
//     { id: "heading" },
//     "Hello World From React!"
// );
const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" },
        [React.createElement("h1", {}, "This is from h1 child"),
        React.createElement("h2", {}, "This is from h2 child")]),
    React.createElement("div", { id: "child2" },
        [React.createElement("h1", {}, "This is from h1 child"),
        React.createElement("h2", {}, "This is from h2 child")])])
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);