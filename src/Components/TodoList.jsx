import React from "react";
import Todo from "./Todo.jsx";

function TodoList(props) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        <Todo
          key={props.idTL}
          idT={props.idTL}
          completedT={props.completedTL}
          text={props.listText}
          onTrashT={props.onTrash}
          onCheckT={props.onCheck}
        />
      </ul>
    </div>
  );
}

export default TodoList;
