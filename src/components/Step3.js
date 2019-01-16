import React, { Component } from 'react';

class Step3 extends Component {

  state = {
    title: "Create an account",
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
  }
  
  render() {
    return (
      <main className="ap__route ma">
        <h2 className="ma_title">{ this.state.title }</h2>
        <form className="form" onSubmit={this.handleSubmit}>
          <fieldset className="form__fieldset">
            <legend className="form__legend">Details</legend>
            
            <div className="field">
              <label className="field__label">This is a uusername input</label>
              <div className="field__wrap">
                <input 
                  className="field__input" 
                  type="text" 
                  placeholder="John"
                  name="firstName"
                  value={this.state.username}
                  onChange={e => this.handleInputChange(e)}
                />
                <svg className="field__svg"></svg>
              </div>
              <small className="field__validation">This is a validation message for username</small>
            </div>

            <div className="field">
              <label className="field__label">This is a last name input</label>
              <div className="field__wrap">
                <input 
                  className="field__input" 
                  type="text" 
                  placeholder="Smith"
                  name="lastName"
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
                  name="email"
                  value={this.state.confirmPassword}
                  onChange={e => this.handleInputChange(e)}
                />
                <svg className="field__svg"></svg>
              </div>
              <small className="field__validation">This is a validation message</small>
            </div>

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
