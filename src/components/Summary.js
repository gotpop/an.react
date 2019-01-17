import React, { Component } from 'react';
import Button from "./Button";

class Summary extends Component {

    state = {
      text: "Home content area"
    };
  
    render() {
      return (
        <main className="ap__route ma">
          <h2 className="ma_title">{ this.state.text }</h2>
          <p>You've added a user.</p>
          <Button />
        </main>
      );
    }
}

export default Summary;
