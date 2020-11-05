import React from "react";
import Login from "./Login.jsx"

var isLoggedIn = false;

const currentTime = new Date().getHours();

function App() {
  return <div className="container">{
 // isLoggedIn ? <h1>Hello</h1> : <Login />
// Special case of the AND operator with left to right processing
  currentTime>12 && <h1>Why are you still working?</h1>
// As above but with ternary operator
//  currentTime>12 ? <h1>Why are you still working?</h1> : null
}</div>;
}

export default App;
