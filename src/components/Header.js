import React, { Component } from 'react';
import logo from '../assets/logo.svg';

class Header extends Component {

    state = {
      text: "Logo",
      menuItems: [
        {
          key: 1,
          title: "Step 1"
        },
        {
          key: 2,
          title: "Step 2"
        },
        {
          key: 3,
          title: "Step 3"
        }
      ]
    };
  
    render() {
      return (
        <header className="he">
          <section className="he-logo">
            <h2 className="he-logo__title">{ this.state.text }</h2>
            <img src={logo} className="he-logo__image" alt="logo" />
          </section>
          <div className="he-nav">
            <nav className="he-nav__bar">
              <a className="he-nav__item">Menu item</a>
              <a className="he-nav__item">Menu item</a>
              <a className="he-nav__item">Menu item</a>
            </nav>
          </div>
        </header>
      );
    }
  }

  export default Header;
