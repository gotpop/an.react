import React, { Component } from 'react';
import Button from "./Button";

class Main extends Component {

    state = {
      text: "Main content area"
    };
  
    render() {
      return (
        <main className="ma">
          <h2 className="ma_title">{ this.state.text }</h2>
          <Button />
        </main>
      );
    }
  }

  export default Main;
