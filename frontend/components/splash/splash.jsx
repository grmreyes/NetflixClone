import React from 'react';
import {
    Link,
  } from 'react-router-dom';

class Splash extends React.Component {
    constructor(props){
        super(props);
        this.handleDemo = this.handleDemo.bind(this);
    }

    handleDemo(e){
        e.preventDefault();
        const demoUser =  { username: "gino123", password: "123456" }
        this.props.signin(demoUser);
    }

    render() {
        return (
        <div>
            <h1>Netflix</h1>
            <Link to="/signin">Sign in</Link>
            <button className='demobutton' onClick={this.handleDemo}>Demo Login</button>   
        </div>
        );
    }
    }

export default Splash;
