import React from 'react';
import './input-panel.css';

const InputPanel = () => {
  return (
    <form className="form-group">
      <input className="form-control " />
      <button className="btn btn-dark">All</button>
      <button className="btn btn-light">Important</button>
    </form>
  );
};

export default InputPanel;
