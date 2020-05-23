//import the React  and React Dom libraries
import React from "react";
import ReactDOM from "react-dom";

//create a react component

const App = () => {
  const textArea = { text: "click me" };

  return (
    <div>
      <label class="label" for="name">
        Enter Name :
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {textArea.text}
      </button>
    </div>
  );
};

const Soappp = () => {
  return <div id="sometext"> testing the rendering!</div>;
};

//show the component on the screen

ReactDOM.render(<App />, document.querySelector("#root"));
