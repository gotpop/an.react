import React, { Component } from 'react';

class Input extends Component {
    render() {
      return (
        <div className="input">
          <label>This is an input</label>
          <div className="input__wrap">
            <input className="input__input" type="text"/>
            <svg></svg>
          </div>
        </div>
      );
    }
  }

export default Input;


