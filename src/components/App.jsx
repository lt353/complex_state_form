import React, { useState } from "react";

function App() {

  const[headingText, setHeadingText] = useState("");
  const[mouseOver, setMouseOver] = useState(false);
  const[name, setName] = useState("");

  function handleMouseOver() {
    setMouseOver(true);
  }
  
  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleChange(event) {
    setName(event.target.value);
  }
  function handleClick(event) {
    setHeadingText(name);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input 
          onChange={handleChange}
          type="text" 
          placeholder="What's your name?" 
          value={name}
        />
        <button 
          type="submit"
          style={{ backgroundColor: mouseOver ? "black" : "white"}}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          >
            Submit
          </button>
        </form>
    </div>
  );
}

export default App;



