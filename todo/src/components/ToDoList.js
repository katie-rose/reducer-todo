import React from "react";

import Item from "./Item";

const ToDoList = props => {
  return (
    <div className="todo-list">
      {props.todos.map(item => (
        <Item key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default ToDoList;
