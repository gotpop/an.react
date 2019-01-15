import React, { Component } from 'react';
import Button from "./Button";

class Main extends Component {

    state = {
      text: "Step 3"
    };
  
    render() {
      return (
        <main className="ap__route ma">
          <h2 className="ma_title">{ this.state.text }</h2>
          <Button />
        </main>
      );
    }
  }

  export default Main;
