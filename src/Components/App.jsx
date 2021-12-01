import React, { useEffect, useState } from "react";
import Form from "./Form.jsx";
import TodoList from "./TodoList.jsx";

function App() {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    handleFilter();
  }, [items, status]);

  function addItems(inputText) {
    setItems((prevItems) => {
      return [
        ...prevItems,
        {
          itemText: inputText,
          completed: false,
          id: Math.random() * 1000
        }
      ];
    });
  }
  console.log(items);

  function trashItem(idT) {
    // Another way of trashing the items.
    // setItems((prevItems) => {
    //   return prevItems.filter((item) => {
    //     return item.id !== idT;
    //   });
    // });
    setItems(
      items.filter((item) => {
        return item.id !== idT;
      })
    );
  }

  function checkItem(idT) {
    // Updating the array i.e. changing the completed value inside the object of the array based on event.
    setItems(
      items.map((item) => {
        if (item.id === idT) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    );
  }

  function handleStatus(value) {
    setStatus(value);
  }

  function handleFilter() {
    switch (status) {
      case "completed":
        setFilteredTodos(
          items.filter((item) => {
            return item.completed === true;
          })
        );
        break;
      case "uncompleted":
        setFilteredTodos(
          items.filter((item) => {
            return item.completed === false;
          })
        );
        break;
      default:
        setFilteredTodos(items);
        break;
    }
  }

  return (
    <div className="App">
      <header>
        <h1 className="animate__animated animate__zoomIn">Todo List</h1>
      </header>
      <Form onAdd={addItems} status={handleStatus} />
      {filteredTodos.map((todoItem) => {
        return (
          <TodoList
            key={todoItem.id}
            idTL={todoItem.id}
            completedTL={todoItem.completed}
            listText={todoItem.itemText}
            onTrash={trashItem}
            onCheck={checkItem}
          />
        );
      })}
    </div>
  );
}

export default App;
