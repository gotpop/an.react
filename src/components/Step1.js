import React, { Component } from 'react';
import Button from "./Button";
import Input from "./forms/Input";

class Main extends Component {

    state = {
      text: "Step 1",
      firstName: "",
      lastName: "",
      email: ""
    };
  
    render() {
      return (
        <main className="ap__route ma">
          <h2 className="ma_title">{ this.state.text }</h2>
          <form>
            <fieldset>
              <legend>Details</legend>
              
              <div className="field">
                <label>This is a first name input</label>
                <div className="field__wrap">
                  <input className="field__input" type="text"/>
                  <svg></svg>
                </div>
                <small className="field__validation">This is a validation message</small>
              </div>

              <div className="field">
                <label>This is a last name input</label>
                <div className="field__wrap">
                  <input className="field__input" type="text"/>
                  <svg></svg>
                </div>
                <small className="field__validation">This is a validation message</small>
              </div>

              <div className="field">
                <label>This is an email input</label>
                <div className="field__wrap">
                  <input className="field__input" type="email"/>
                  <svg></svg>
                </div>
                <small className="field__validation">This is a validation message</small>
              </div>

              <div className="action-row">
                <button type="submit">Submit</button>
              </div>
            </fieldset>
          </form>
          <Button />
        </main>
      );
    }
  }

  export default Main;
