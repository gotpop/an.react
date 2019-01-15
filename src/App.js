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

  render() {
    return (
      <BrowserRouter>
        <div className="ap">
          <Header menuItems={this.state.menuItems} />
          <Route exact path="/" component={Home} />
          <Route path="/step1" render={ () => <Step1 title="This is step 1 !!!" />} />
          <Route path="/step2" component={Step2} />
          <Route path="/step3" component={Step3} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;


