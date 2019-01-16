import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import './styles/css/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
class App extends Component {
  
  state = {
    text: "Logo",
    score: 25,
    toDashboard: false,
    formDetails: null,
    formDetails2: null,
    formDetails3: null,
    menuItems: [
      {
        key: 1,
        id: 1,
        title: "Home",
        url: "/"
      },
      {
        key: 2,
        id: 2,
        title: "Step 1",
        url: "/step1"
      },
      {
        key: 3,
        id: 3,
        title: "Step 2",
        url: "/step2"
      },
      {
        key: 4,
        id: 4,
        title: "Step 3",
        url: "/step3"
      }
    ]
  };

  setNameInApp = (maState) => {
    this.setState({
      formDetails: maState
    });
  };
  
  setNameInApp2 = (maState) => {
    this.setState({
      formDetails2: maState
    });
  };
  
  setNameInApp3 = (maState) => {
    this.setState({
      formDetails3: maState
    });
  };
  
  render() {
    return (
      <BrowserRouter>
        <div className="ap">
          <Header menuItems={this.state.menuItems} />
          <Route exact path="/" component={Home} />
          {/* Render components to pass props */}
          <Route path="/step1" render={ () => <Step1 setNameInApp={this.setNameInApp} />} />
          <Route path="/step2" render={ () => <Step2 setNameInApp2={this.setNameInApp2} />} />
          <Route path="/step3" render={ () => <Step3 setNameInApp3={this.setNameInApp3} />} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;


