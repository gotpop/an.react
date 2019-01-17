import React, { Component } from 'react';
import Button from "./Button";
import { Link } from "react-router-dom";

class Home extends Component {

    state = {
      text: "Multi Step React Grid."
    };
  
    render() {
      return (
        <main className="ap__route ma">
          <h2 className="ma_title">{ this.state.text }</h2>
          <p>This is a multi step form demo built with React and CSS Grid.</p>
          <Link className="btn btn--primary" to="/step1">Get started!</Link>
        </main>
      );
    }
  }

  export default Home;
