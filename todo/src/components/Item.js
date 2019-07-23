import React from "react";

const Item = props => {
  return (
    <div
      className={`item${props.item.completed ? " completed" : ""}`}
      onClick={() => props.toggleItem(props.item.id)}
    >
      <p>{props.item.item}</p>
    </div>
  );
};

export default Item;
