import React, { Component } from 'react';
import './styles/css/App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  
  state = {
    text: "Logo",
    score: 25,
    menuItems: [
      {
        id: 1,
        title: "Step 1"
      },
      {
        id: 2,
        title: "Step 2"
      },
      {
        id: 3,
        title: "Step 3"
      }
    ]
  };

  render() {
    return (
      <div className="ap">
            <Header menuItems={this.state.menuItems} />
            <Main  />
            <Footer />
      </div>
    );
  }
}

export default App;


