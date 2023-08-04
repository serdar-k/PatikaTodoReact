import React from "react";
import TodoForm from "./TodoForm/TodoForm";

function Header() {
  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <TodoForm />
      </header>
    </div>
  );
}

export default Header;
