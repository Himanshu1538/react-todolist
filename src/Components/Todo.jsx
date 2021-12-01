import React, { useState } from "react";

function Todo(props) {
  // const [isCompleted, setIsCompleted] = useState(false);
  // const [isDeleted, setIsDeleted] = useState(false);

  function handleTrashClick() {
    props.onTrashT(props.idT);
    console.log(props);
    console.log(props.idT);
  }

  function handleCheckClick(event) {
    props.onCheckT(props.idT);
    console.log(props);
    console.log(props.idT);
  }

  return (
    <div className="todo animate__animated animate__lightSpeedInLeft">
      <li
        className={`todo-item ${props.completedT ? "completed" : " "}`}
        // style={{ textDecoration: props.completedT ? "line-through" : "none" }}
      >
        {props.text}
      </li>
      <button onClick={handleCheckClick} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={handleTrashClick} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
