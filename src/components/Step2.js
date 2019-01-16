import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class Step2 extends Component {

  state = {
    title: "Step 2",
    navigateToNextPage: false,
    address1: "",
    address2: "",
    postcode: ""
  };

  handleInputChange = (e) => {
    this.setState({ 
      [e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.setNameInApp2(this.state);
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
                <label className="field__label">This is a address1 input</label>
                <div className="field__wrap">
                  <input 
                    className="field__input" 
                    type="text" 
                    placeholder="1 Address house"
                    name="address1"
                    value={this.state.address1}
                    onChange={e => this.handleInputChange(e)}
                  />
                  <svg className="field__svg"></svg>
                </div>
                <small className="field__validation">This is a validation message for address1</small>
              </div>

              <div className="field">
                <label className="field__label">This is a address2 input</label>
                <div className="field__wrap">
                  <input 
                    className="field__input" 
                    type="text" 
                    placeholder="Address street"
                    name="address2"
                    value={this.state.address2}
                    onChange={e => this.handleInputChange(e)}
                  />
                  <svg className="field__svg"></svg>
                </div>
                <small className="field__validation">This is a validation message for address2</small>
              </div>

              <div className="field">
                <label className="field__label">This is an postcode input</label>
                <div className="field__wrap">
                  <input 
                    className="field__input" 
                    type="text" 
                    placeholder="email@email.com"
                    required="required"
                    name="postcode"
                    value={this.state.postcode}
                    onChange={e => this.handleInputChange(e)}
                  />
                  <svg className="field__svg"></svg>
                </div>
                <small className="field__validation">This is an postcode validation message</small>
              </div>

              <div className="action-row">
                <button
                  className="btn btn--secondary"
                  type="reset">Cancel</button>
                <button
                  className="btn btn--primary"
                  type="submit">Continue</button>
              </div>
            </fieldset>
            
          </form>
        </main>
      );
    }
  }

  export default Step2;
