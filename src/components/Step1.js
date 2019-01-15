import React, { Component } from 'react';
import Button from "./Button";
import Input from "./forms/Input";

class Main extends Component {

    state = {
      text: "Step 1"
    };
  
    render() {
      return (
        <main className="ap__route ma">
          <h2 className="ma_title">{ this.state.text }</h2>
          <form>
            <fieldset>
              <legend>Details</legend>
              
              <div className="input">
                <label>This is an input</label>
                <div className="input__wrap">
                  <input className="input__input" type="text"/>
                  <svg></svg>
                </div>
                <small className="input__validation">This is a validation message</small>
              </div>

              <button type="submit">Submit</button>
            </fieldset>
          </form>
          <Button />
        </main>
      );
    }
  }

  export default Main;
