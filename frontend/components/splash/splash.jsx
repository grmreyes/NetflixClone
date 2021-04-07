import React from 'react';
import {
    Link,
  } from 'react-router-dom';
import GreetingContainer from './greeting_container'
import {
    Route,
   } from 'react-router-dom';

class Splash extends React.Component {
    constructor(props){
        super(props);
    }



    render() {
        return (
        <div className="splash-container">
            <div className="splash-main">
                <img src="https://i.imgur.com/rXPv4BN.png" className="splash-logo"/>
                <Link className="splash-signin" to="/signin">Sign In</Link>
                <Route exact path="/" handleDemo={this.handleDemo} component ={GreetingContainer}/>
            </div>
            <div className="item-container">
                <div className="splash-text">
                    <h1>Put the bunny in the box.</h1>
                    <h3>Watch on Smart TVs, Playstation, Xbox, </h3>
                    <h3>Chromecast, Apple TV, Blu-ray players, </h3>
                    <h3>and more.</h3>
                </div>
                <img src="https://i.imgur.com/zlOb2XL.png"/>            
            </div>
            <div className="item-container">
                <img src="https://i.imgur.com/2gpQFcJ.png"/>    
                <div className="splash-text-right">
                    <h1>Papa's got a brand new bag.</h1>
                    <h3>Whether you like watching wicker men </h3>
                    <h3>or bad lieutenants, your favorite</h3>
                    <h3>Cage movies are in your bag. </h3>
                </div>
                        
            </div>
            <div className="item-container">
                <div className="splash-text">
                    <h1>Oh no! Not the FEES!?</h1>
                    <h3>Stream on your phone, laptop, </h3>
                    <h3>and TV without paying more. </h3>
                </div>
                <img src="https://i.imgur.com/SLqwk8B.png"/>            
            </div>
        </div>
        );
    }
    }

export default Splash;
