import React from 'react';
import './task.css';

const Task = props => {
  let classDone = 'todo-list-item';
  if (props.important) {
    classDone += ' done';
  }

  return (
    <span className={classDone}>
      <span className="todo-list-item-label">{props.label}</span>

      <button
        className="btn btn-outline-success"
        onClick={props.toggleImportant}
      >
        Important
      </button>
      <button className="btn btn-outline-danger" onClick={props.deleteItem}>
        Delete
      </button>
    </span>
  );
};

export default Task;
