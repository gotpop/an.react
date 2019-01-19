import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Summary extends Component {

    state = {
      text: "Success!",
      summarryText: "Summary"
    };
  
    render() {
      return (
        <main className="ap__route ma">
          <section className="ma__content">
            <h2 className="ma_title">{ this.state.text }</h2>
            <p>You've added a user.</p>
          </section>
          <section className="summary">
            <h2 className="summary__title">{ this.state.summarryText }</h2>
            <p>Here's the user.</p>
          </section>
          <Link className="btn btn--primary" to="/">Continue to home page</Link>
        </main>
      );
    }
}

export default Summary;
