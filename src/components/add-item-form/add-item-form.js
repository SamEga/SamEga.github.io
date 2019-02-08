import React, { Component } from 'react';
import './add-item-form.css';

export default class AddItemForm extends Component {
  state = {
    label: ''
  };

  onChangeItem = e => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.label.length) {
      this.props.onAddItem(this.state.label);
      this.setState({
        label: ''
      });
    }
  };

  render() {
    return (
      <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
        <input
          className="form-control"
          onChange={this.onChangeItem}
          value={this.state.label}
        />
        <button className="btn btn-outline-primary">Add item</button>
      </form>
    );
  }
}
