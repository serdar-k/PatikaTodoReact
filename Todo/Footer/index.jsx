import React from "react";
import { useTodo } from "../Contexts/TodoContext";

function FooterTodo() {
  const { todos, filterTodo } = useTodo();

  return (
    <div>
      <footer className="footer">
        <span className="todo-count">
          <strong>{todos.length > 0 ? todos.length : 0} </strong>
          items left
        </span>

        <ul className="filters">
          <li>
            <a href="#/" className="selected" onClick={() => filterTodo("all")}>
              All
            </a>
          </li>
          <li>
            <a href="#/" onClick={() => filterTodo("active")}>
              Active
            </a>
          </li>
          <li>
            <a href="#/" onClick={() => filterTodo("completed")}>
              Completed
            </a>
          </li>
        </ul>

        <button className="clear-completed">Clear completed</button>
      </footer>
    </div>
  );
}

export default FooterTodo;
