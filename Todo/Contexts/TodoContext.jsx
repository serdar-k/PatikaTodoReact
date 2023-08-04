import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTodo = (todoText) => {
    setTodos((prev) => [
      ...prev,
      { id: uuidv4(), text: todoText, completed: false },
    ]);
  };

  const deleteTodo = (todoID) => {
    const clone_todos = [...todos];
    clone_todos.find((todo, index) =>
      todo.id === todoID ? clone_todos.splice(index, 1) : null
    );
    setTodos(clone_todos);
  };

  const toggleComplete = (todoID) => {
    const clone_todos = [...todos];
    clone_todos.find((todo, index) =>
      todo.id === todoID
        ? (todo.completed = !todo.completed)
        : (todo.completed = todo.completed)
    );
    setTodos(clone_todos);
  };

  const filterTodo = (filterName) => {
    setFilter(filterName);
  };

  const values = {
    todos,
    addTodo,
    toggleComplete,
    deleteTodo,
    filterTodo,
    filter,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export const useTodo = () => {
  const context = useContext(TodoContext);

  if (context === undefined) {
    throw new Error("useTodo hook must be call in TodoProvider component");
  }

  return context;
};
