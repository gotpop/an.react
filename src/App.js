import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './styles/css/App.css';
import Game from './components/TestComponent';

const Header = (props) => {
  return (
    <h2>{ props.text }</h2>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Header text="This is a test title ??????????" />
          <Game
            liamVar="hello"/>

        </header>
      </div>
    );
  }
}

export default App;


