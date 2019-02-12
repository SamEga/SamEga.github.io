import React from 'react';
import './task.css';

const Task = props => {
  const { item } = props;

  let classItem = 'todo-list-item';
  if (item.important) {
    classItem += ' important';
  }
  if (item.done) {
    classItem += ' done';
  }

  return (
    <span className={classItem}>
      <span onClick={props.toggleDone} className="todo-list-item-label">
        {item.label}
      </span>

      <button className="btn btn-outline-danger" onClick={props.deleteItem}>
        Delete
      </button>
      <button
        className="btn btn-outline-success"
        onClick={props.toggleImportant}
      >
        Important
      </button>
    </span>
  );
};

export default Task;
