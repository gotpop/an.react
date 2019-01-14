import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './styles/css/App.css';
import Game from './components/TestComponent';

const Header = (props) => {
  return (
    <header className="App-header">
    <h2>{ props.text }</h2>
    <img src={logo} className="App-logo" alt="logo" />
    <Game liamVar="hello"/>
    </header>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header text="This is a test title ??????????" />
      </div>
    );
  }
}

export default App;


