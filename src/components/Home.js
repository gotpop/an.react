import React, { Component } from 'react';
import Button from "./Button";

class Home extends Component {

    state = {
      text: "Home content area"
    };
  
    render() {
      return (
        <main className="ap__route ma">
          <h2 className="ma_title">{ this.state.text }</h2>
          <p>This is a multi step form demo built with React and CSS Grid.</p>
          <Button />
        </main>
      );
    }
  }

  export default Home;
