import React, { Component } from 'react';

import TaskList from '../tasks-list/tasks-list';
import InputPanel from '../input-panel/input-panel';

import AddItemForm from '../add-item-form/add-item-form';

export default class App extends Component {
  maxId = 1;
  state = {
    todoData: [
      this.createItem('My SQL'),
      this.createItem('JAVA'),
      this.createItem('GraphQl')
    ]
  };

  createItem(label) {
    return {
      id: this.maxId++,
      label,
      important: false
    };
  }

  addItem = text => {
    const newTask = this.createItem(text);

    this.setState(data => {
      const { todoData } = this.state;
      const newArr = [...todoData, newTask];
      return {
        todoData: newArr
      };
    });
  };

  deleteItem = id => {
    const newState = Object.assign({}, this.state);
    const curItem = newState.todoData.findIndex(item => {
      return item.id === id;
    });
    newState.todoData.splice(curItem, 1);

    this.setState({
      newState
    });
  };

  toggleImportant = id => {
    const newState = Object.assign({}, this.state);
    const curItem = newState.todoData.find(item => {
      return item.id === id;
    });
    curItem.important = !curItem.important;

    this.setState(() => {
      return { newState, curItem };
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Todo App</h1>
        <InputPanel />
        <TaskList
          data={this.state.todoData}
          deleteItem={this.deleteItem}
          toggleImportant={this.toggleImportant}
        />
        <AddItemForm onAddItem={this.addItem} />
      </div>
    );
  }
}
