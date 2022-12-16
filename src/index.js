/* section 2 step by state setup */
// 1) import react and react dom libraries
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

// 2)get a refernce to the div with ID root
const el = document.getElementById("root");

// 3)to tell rect to take control of theat element.
const root = ReactDOM.createRoot(el);

// step 2 and 3 toghether
// const root = ReactDOM.createRoot(document.getElementById("root"));

// 4)create a react component.
// function App() {
//   return <input type="number" placeholder="age?" />;
// }

// 5)show the component on the screen.
root.render(<App />);
