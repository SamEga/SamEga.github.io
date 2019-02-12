import React from 'react';
import Task from '../task/task';
import './tasks-list.css';

const TasksList = props => {
  const elements = props.items.map(item => {
    return (
      <li className="list-group-item" key={item.id}>
        <Task
          item={item}
          toggleImportant={() => {
            props.toggleImportant(item.id);
          }}
          toggleDone={() => {
            props.toggleDone(item.id);
          }}
          deleteItem={() => {
            props.deleteItem(item.id);
          }}
        />
      </li>
    );
  });
  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TasksList;
