import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class Step3 extends Component {

  state = {
    title: "Add a user",
    navigateToNextPage: false,
    username: "",
    password: "",
    confirmPassword: ""
  };

  handleInputChange = (e) => {
    this.setState({ 
      [e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.setNameInApp3(this.state);
    this.setState({ 
      navigateToNextPage: true
    });
  }
  
  render() {
    // Redirect to next page
    if (this.state.navigateToNextPage === true) {
      return <Redirect push to="./step2/" />
    }
   
    return (
      <main className="ap__route ma">
        <h2 className="ma_title">{ this.state.title }</h2>
        <form className="form" onSubmit={this.handleSubmit}>
          <fieldset className="form__fieldset">
            <legend className="form__legend">Details</legend>
            
            <div className="field">
              <label className="field__label">Username</label>
              <div className="field__wrap">
                <input 
                  className="field__input" 
                  type="text" 
                  placeholder="myusername"
                  required="required"
                  name="username"
                  value={this.state.username}
                  onChange={e => this.handleInputChange(e)}
                />
                <svg className="field__svg"></svg>
              </div>
              <small className="field__validation">This is a validation message</small>
            </div>

            <div className="field">
              <label className="field__label">Enter a password</label>
              <div className="field__wrap">
                <input 
                  className="field__input" 
                  type="text" 
                  placeholder="Smith"
                  name="password"
                  value={this.state.password}
                  onChange={e => this.handleInputChange(e)}
                />
                <svg className="field__svg"></svg>
              </div>
              <small className="field__validation">This is a validation message</small>
            </div>

            <div className="field">
              <label className="field__label">This is an email input</label>
              <div className="field__wrap">
                <input 
                  className="field__input" 
                  type="text" 
                  placeholder="email@email.com"
                  name="confirmPassword"
                  value={this.state.confirmPassword}
                  onChange={e => this.handleInputChange(e)}
                />
                <svg className="field__svg"></svg>
              </div>
              <small className="field__validation">This is a validation message</small>
            </div>
          </fieldset>
          <fieldset className="form__fieldset">
            <div className="action-row">
              <button
                className="btn btn--secondary"
                type="reset">Cancel</button>
              <button
                className="btn btn--primary"
                type="submit">Submit</button>
            </div>
          </fieldset>
        </form>
      </main>
    );
  }
}

  export default Step3;
