import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./App.css";
import TodoItem from "./Components/TodoItem";

const App = () => {
  const [todoList, updateTodoList] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const onEnterInput = (event) => {
    setInputValue(event.target.value);
  };

  const onAddTodo = (event) => {
    event.preventDefault();
    if (inputValue === "") {
      alert("Please enter a todo");
      return;
    }
    const newTodo = { id: uuidv4(), title: inputValue, status: "pending" };
    updateTodoList((prevTodoList) => [...prevTodoList, newTodo]);
    setInputValue("");
  };

  const updateStatus = (id, statusarg) => {
    const updatedTodoList = todoList.map((eachTodo) => {
      if (eachTodo.id === id) {
        return { ...eachTodo, status: statusarg };
      }
      return eachTodo;
    });
    updateTodoList(updatedTodoList);
  };

  const onDeleteTodo = (id) => {
    const filteredTodoList = todoList.filter((eachTodo) => eachTodo.id !== id);
    updateTodoList(filteredTodoList);
  };

  return (
    <form onSubmit={onAddTodo} className="main-container">
      <h1 className="todo-heading">Todo List</h1>
      <div className="input-div">
        <input
          value={inputValue}
          onChange={onEnterInput}
          className="input-ele"
        />
        <button type="submit" className="add-button">
          Add
        </button>
      </div>
      <div id="todoContainer" className="todos-container">
        {todoList.map((eachtodo) => (
          <TodoItem
            key={eachtodo.id}
            deleteFun={onDeleteTodo}
            statusFun={updateStatus}
            todoDetails={eachtodo}
          />
        ))}
      </div>
      <div className="save-button-div">
        <button type="button" className="save-button">
          Save
        </button>
      </div>
    </form>
  );
};

export default App;
