import React, { useEffect } from "react";
import { useTodo } from "../../Contexts/TodoContext";

let clone_todos;

function List() {
  const { todos, deleteTodo, toggleComplete, filter } = useTodo();
  if (filter === "all") {
    clone_todos = todos;
    console.log(clone_todos);
  } else if (filter === "active") {
    clone_todos = todos.filter((todo) => todo.completed === false);
    console.log(clone_todos);
  } else if (filter === "completed") {
    clone_todos = todos.filter((todo) => todo.completed === true);
    console.log(clone_todos);
  }
  return (
    <div>
      {clone_todos.map((todo, index) => {
        return (
          <li key={index} className={todo.completed ? "completed" : ""}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                onClick={() => toggleComplete(todo.id)}
              />
              <label>{todo.text}</label>
              <button
                className="destroy"
                onClick={() => deleteTodo(todo.id)}
              ></button>
            </div>
          </li>
        );
      })}
    </div>
  );
}

export default List;
