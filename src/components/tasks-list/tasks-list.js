import React from 'react';
import Task from '../task/task';
import './tasks-list.css';

const TasksList = props => {
  const elements = props.data.map(item => {
    return (
      <li className="list-group-item" key={item.id}>
        <Task
          important={item.important}
          data={props.data}
          label={item.label}
          toggleImportant={() => {
            props.toggleImportant(item.id);
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
