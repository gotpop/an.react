import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import MenuItem from './MenuItem';
import { Link } from "react-router-dom";

class Header extends Component {

    state = {
      text: "Logo",
      score: 25,
    };

    make = () => {
      this.setState( prevSate => {
        return {
          score: prevSate.score + 1
        }
      });
    }

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
            <div className="he-nav__image-wrap" onClick={this.make}>
              <img src={logo} className="he-nav__image" alt="logo" />
              <small className="he-nav__small">{ this.state.score }</small>
            </div>
          </div>
        </header>
      );
    }
  }

  export default Header;
