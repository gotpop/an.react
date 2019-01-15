import React, { Component } from 'react';
import Button from "./Button";
// import Input from "./forms/Input";

class Main extends Component {

    state = {
      text: "Step 1",
      firstName: "",
      lastName: "",
      email: ""
    };

    handleInputChange = (e) => {
      this.setState({ 
        [e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
      e.preventDefault();
      // console.log('this.props', this.props);
    }
  
    render() {
      const { fullname } = this.state.firstName
      return (
        <main className="ap__route ma">
          <h2 className="ma_title">{ this.state.firstName }</h2>
          <pre>
            { fullname }
          </pre>
          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <legend>Details</legend>
              
              <div className="field">
                <label className="field__label">This is a first name input</label>
                <div className="field__wrap">
                  <input 
                    className="field__input" 
                    type="text" 
                    placeholder="John"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={e => this.handleInputChange(e)}
                  />
                  <svg className="field__svg"></svg>
                </div>
                <small className="field__validation">This is a validation message</small>
              </div>

              <div className="action-row">
                <button
                  className="btn btn--primary"
                  type="submit">Submit</button>
              </div>
            </fieldset>
          </form>
          <Button />
        </main>
      );
    }
  }

  export default Main;
