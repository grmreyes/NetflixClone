import React from 'react';
import {Link,Route} from 'react-router-dom';
import GreetingContainer from './greeting_container'
import Footer from '../plugs/footer'

class Splash extends React.Component {
    constructor(props){
        super(props);
    }



    render() {
        return (
        <div className="splash-container">
            <div className="splash-main">
                
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
                <img src={window.splash1}/>             
            </div>
            <div className="item-container">
                <img src={window.splash2}/>    
                <div className="splash-text-right">
                    <h1>Papa's got a brand new bag.</h1>
                    <h3>Whether you like watching wicker men </h3>
                    <h3>or bad lieutenants, your favorite</h3>
                    <h3>Cage movies are in your bag. </h3>
                </div>
                        
            </div>
            <div className="item-container">
                <div className="splash-text">
                    <h1>Not the FEES!?</h1>
                    <h3>Stream on your phone, laptop, </h3>
                    <h3>and TV without paying more. </h3>
                </div>
                <img src={window.splash3}/>             
            </div>
            <Footer />
        </div>
        
        );
    }
    }

export default Splash;
