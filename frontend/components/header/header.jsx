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
        this.handleLogout = this.handleLogout.bind(this)
    }

  handleLogout(){
      window.profHidden = false;
      this.props.logout();
  } 

  render() {

    
    
    return (
        <div className = "header" id="navbar">        
            <Link to="/browse">
              <img src={window.logo} className="header-logo" />
            </Link>
            <button onClick={this.handleLogout} className="logout">Log Out</button>
        </div>

    );
  }
}

export default Header;

// for username: <h2>{this.props.currentUser.username}!</h2>
