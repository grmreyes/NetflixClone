import React from 'react';
import {
    Link,
  } from 'react-router-dom';

class Header extends React.Component {
    constructor(props){
        super(props)
    }


  render() {
    return (
        <div className = "header">        
            <Link to="/">
            <img src="https://i.imgur.com/rXPv4BN.png" className="header-logo" />
            </Link>
            <button onClick={this.props.logout} className="logout">Log Out</button>
        </div>

    );
  }
}

export default Header;

// for username: <h2>{this.props.currentUser.username}!</h2>
