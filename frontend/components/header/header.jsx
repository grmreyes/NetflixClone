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
        <div>        
            <Link to="/" className="header-link">
            <h1>Netflix</h1>
            </Link>
            <h2>{this.props.currentUser.username}!</h2>
            <button onClick={this.props.logout}>Log Out</button>
        </div>

    );
  }
}

export default Header;
