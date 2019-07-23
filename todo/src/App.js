import React, { useReducer } from "react";

import {
  reducer,
  initialState,
  ADD_ITEM,
  TOGGLE_ITEM,
  CLEAR_COMPLETED
} from "./reducers/reducer";

import ToDoList from "./components/ToDoList";
import ListForm from "./components/ListForm";
import "./App.css";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = (e, item) => {
    e.preventDefault();
    dispatch({ type: ADD_ITEM, payload: item });
  };

  const toggleItem = itemId => {
    dispatch({ type: TOGGLE_ITEM, payload: itemId });
  };

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({ type: CLEAR_COMPLETED });
  };

  return (
    <div className="App">
      <div className="header">
        <h1>ToDo List</h1>
        <ListForm addItem={addItem} />
      </div>
      <ToDoList
        todos={state.todos}
        toggleItem={toggleItem}
        clearCompleted={clearCompleted}
      />
    </div>
  );
};

export default App;
