import React, { Component } from 'react';
import logo from '../assets/logo.svg';

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
        console.log(this.props)
    }


  
    render() {
      return (
        <header className="he">
          <section className="he-logo">
            <h2 className="he-logo__title">{ this.state.text }</h2>
            <img src={logo} className="he-logo__image" alt="logo" />
          </section>
          <div className="he-nav">
            <nav className="he-nav__bar">
              {this.props.menuItems.map( player => 
                <a href="/" className="he-nav__item">{ player.title }</a>
              )}
            </nav>
            <div className="he-nav__image-wrap" onClick={this.make}>
              <img src={logo} className="he-hav__image" alt="logo" />
              <small className="he-nav__small">{ this.state.score }</small>
            </div>
          </div>
        </header>
      );
    }
  }

  export default Header;
