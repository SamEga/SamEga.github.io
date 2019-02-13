import React, { Component } from 'react';

import './App.css';

import TaskList from '../tasks-list/tasks-list';
import InputPanel from '../input-panel/input-panel';

import AddItemForm from '../add-item-form/add-item-form';

export default class App extends Component {
  maxId = 1;
  state = {
    items: [this.createItem('Test Row'), this.createItem('Another Test Row')],
    filter: 'All',
    search: ''
  };

  createItem(label) {
    return {
      id: this.maxId++,
      label,
      important: false,
      done: false
    };
  }

  addItem = text => {
    const newTask = this.createItem(text);

    this.setState(data => {
      const { items } = this.state;
      const newArr = [...items, newTask];
      return {
        items: newArr
      };
    });
  };

  deleteItem = id => {
    const newState = Object.assign({}, this.state);
    const curItem = newState.items.findIndex(item => {
      return item.id === id;
    });
    newState.items.splice(curItem, 1);

    this.setState({
      newState
    });
  };

  // Change item done value

  toggleDone = id => {
    console.log(this.state.items);
    const newState = Object.assign({}, this.state);
    const curItem = newState.items.find(item => {
      return item.id === id;
    });
    curItem.done = !curItem.done;

    this.setState(() => {
      return { newState, curItem };
    });
  };

  // Change item important value
  toggleImportant = id => {
    const newState = Object.assign({}, this.state);
    const curItem = newState.items.find(item => {
      return item.id === id;
    });
    curItem.important = !curItem.important;

    this.setState(() => {
      return { newState, curItem };
    });
  };

  // Set filtered value from button
  filterItems = name => {
    this.setState({ filter: name });
  };

  // Filter items on filter value
  filterState = (items, filter) => {
    switch (filter) {
      case 'All':
        return items;

      case 'Important':
        return items.filter(item => {
          return item.important;
        });

      case 'Done':
        return items.filter(item => {
          return item.done;
        });

      default:
        return items;
    }
  };

  // Set search value from input
  onChangeSearch = e => {
    this.setState({ search: e.target.value });
  };

  searchState = (items, search) => {
    return items.filter(item => {
      return item.label.toLowerCase().indexOf(search) > -1;
    });
  };

  render() {
    const filteredItems = this.filterState(
      this.searchState(this.state.items, this.state.search),
      this.state.filter
    );
    return (
      <div className="container">
        <h1>Task App</h1>
        <InputPanel
          onChangeSearch={this.onChangeSearch}
          filterItems={this.filterItems}
          filter={this.state.filter}
        />
        <TaskList
          items={filteredItems}
          deleteItem={this.deleteItem}
          toggleImportant={this.toggleImportant}
          toggleDone={this.toggleDone}
        />
        <AddItemForm onAddItem={this.addItem} />
      </div>
    );
  }
}
