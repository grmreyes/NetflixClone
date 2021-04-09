import React from 'react';
import {
    Link,
  } from 'react-router-dom';

class Header extends React.Component {
    constructor(props){
        super(props)

        window.addEventListener('scroll', (event) => {
          
          if ($(window).scrollTop() < 100) {
            $('#navbar').removeClass('header').addClass('header-trans');
          }
          else{
            $('#navbar').removeClass('header-trans').addClass('header');
          }
        });
    }

    

  render() {
    
    return (
        <div className = "header" id="navbar">        
            <Link to="/browse">
              <img src={window.logo} className="header-logo" />
            </Link>
            <button onClick={this.props.logout} className="logout">Log Out</button>
        </div>

    );
  }
}

export default Header;

// for username: <h2>{this.props.currentUser.username}!</h2>
