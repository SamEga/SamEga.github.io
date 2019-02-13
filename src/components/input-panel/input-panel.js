import React, { Component } from 'react';
import './input-panel.css';

export default class InputPanel extends Component {
  btnsData = [{ name: 'All' }, { name: 'Important' }, { name: 'Done' }];

  render() {
    const btns = this.btnsData.map(item => {
      const isActive = this.props.filter === item.name;
      const activeClass = isActive ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button
          className={`btn ${activeClass}`}
          key={item.name}
          onClick={() => {
            this.props.filterItems(item.name);
          }}
        >
          {item.name}
        </button>
      );
    });
    return (
      <div className="form-group">
        <input
          onChange={e => {
            this.props.onChangeSearch(e);
          }}
          className="form-control "
        />
        {btns}
      </div>
    );
  }
}
