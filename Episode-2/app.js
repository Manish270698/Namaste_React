import React from "react";
import ReactDOM from "react-dom/client";

//Hello World from Javascript
const JS_hello = document.createElement("h1");
JS_hello.innerHTML = "Hello World from Javascript!";
const hello2 = document.getElementById("hello2");
hello2.appendChild(JS_hello);

//Hello World from React
const React_hello = React.createElement("h1", {}, "Hello World from React!");
const hello3 = ReactDOM.createRoot(document.getElementById("hello3"));
hello3.render(React_hello);


// Nested react elements
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child1"}, [
        React.createElement("h1", {}, "This is h1 tag"),
        React.createElement("h2", {}, "This is h2 tag")
    ]),
    React.createElement("div", {id: "child2"}, [
        React.createElement("h1", {}, "This is h1 tag"),
        React.createElement("h2", {}, "This is h2 tag")
    ])
])

root.render(parent);
