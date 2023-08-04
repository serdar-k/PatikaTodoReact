import React from "react";
import List from "./List/List";

function Content() {
  return (
    <div>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          <List />
        </ul>
      </section>
    </div>
  );
}

export default Content;
