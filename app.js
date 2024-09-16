import React from "react";
import ReactDOM from "react-dom/client"
const heading1 = React.createElement('h1', {
    id: "heading1",
    key: "heading1" // Add a unique key for this element
}, 'hello world');

const heading2 = React.createElement('h2', {
    id: 'heading2',
    key: "heading2" // Add a unique key for this element
}, 'this is new react project');

const mainDiv = React.createElement('div', {
    id: 'main_div'
}, [heading1, heading2]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(mainDiv);
