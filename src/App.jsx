import React from "react";
import "./App.css";

// const welcome = {
//   greeting: "Hey",
//   title: "React",
// };

function getTitle(title) {
  return title;
}

function App() {
  return (
    <>
      <div>
        <h1>
          {/* {welcome.greeting},{welcome.title}!
           */}
          Hello,{getTitle("React")}
        </h1>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text" />
      </div>
    </>
  );
}
const num = [1, 2, 3, 4];

const exponentialNum = num.map(function (num) {
  return num * num;
});
console.log(exponentialNum);

export default App;
