import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import logoGithub, {ReactComponent as MyLogoGithub}  from '../assets/logo-github.svg';
import MenuItem from './MenuItem';
import { Link } from "react-router-dom";

class Header extends Component {

    state = {
      text: "React Grid",
      altText: "Click here to see this project on Github",
    };

    render() {
      return (
        <header className="he">
          <section className="he-logo">
            <Link className="he-logo__link" to="/">
              <h2 className="he-logo__title">{ this.state.text }</h2>
              <img src={logo} className="he-logo__image" alt="logo" />
            </Link>
          </section>
          <div className="he-nav">
            <nav className="he-nav__bar">
              {this.props.menuItems.map( player => 
                <MenuItem 
                  player={player}
                  key={player.id}
                />
              )}
            </nav>
            <div className="he-nav__image-wrap">
              <a className="he-nav__link-ext" target="_blank" href="https://github.com/gotpop/an.react">
                <MyLogoGithub className="he-nav__image" />
              </a>
            </div>
          </div>
        </header>
      );
    }
  }

  export default Header;
