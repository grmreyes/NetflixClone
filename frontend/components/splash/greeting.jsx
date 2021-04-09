import React from 'react';

class Greeting extends React.Component {
    constructor(props){
        super(props);
        this.handleDemo = this.handleDemo.bind(this);
    }

    

    handleDemo(e){
        e.preventDefault();
        const demoUser =  { username: "ncage", password: "123456" }
        this.props.signin(demoUser);
    }

    render(){
        return (
            <div className ="greeting">
                <h1 className="splash-header">Unlimited Nicolas Cage movies.</h1>
                <h3 className="splash-subheader">Watch anywhere. Cancel anytime.</h3>
                <button className='demobutton' onClick={this.handleDemo}>Demo Login  &gt;</button>  
            </div>
        )
    }

}

export default Greeting