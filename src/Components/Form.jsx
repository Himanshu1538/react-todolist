import React, { useState } from "react";

function Form(props) {
  const [inputText, setInputText] = useState("");

  function handleInput(event) {
    const input = event.target.value;
    // console.log(input);
    setInputText(input);
  }

  function handleClick(event) {
    props.onAdd(inputText);
    setInputText("");
    event.preventDefault();
  }
  // console.log(inputText);

  function handleChange(event) {
    // console.log(event.target.value);
    props.status(event.target.value);
  }

  return (
    <form>
      <input
        onChange={handleInput}
        type="text"
        className="todo-input"
        value={inputText}
      ></input>
      <button onClick={handleClick} type="submit" className="todo-button">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={handleChange} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
