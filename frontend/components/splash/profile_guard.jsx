import React from 'react';
import {Link,Route} from 'react-router-dom';
import GreetingContainer from './greeting_container'

class ProfileGuard extends React.Component {
    constructor(props){
        super(props);
        // this.hideProf=this.hideProf.bind(this);
        // if(window.profHidden){
        //     this.hideProf()
        // }
    }

    hideProf(e){
        let pgDiv = document.querySelector('.profile-guard-container');
        pgDiv.classList.add('hidden');
        window.profHidden = true;
    }

    render() {
        return (
        <div className="profile-guard-container">
            <h1>Who's watching?</h1>
            <ul className="profile-list">
            <li><Link to="/browse"><img onClick={this.hideProf} className="pic-choose" src={window.cameron}/></Link></li>
            <li><Link to="/browse"><img onClick={this.hideProf} className="pic-choose" src={window.caster}/></Link></li>
            <li><Link to="/browse"><img onClick={this.hideProf} className="pic-choose" src={window.cage}/></Link></li>
            </ul>
        </div>
        );
    }
    }

export default ProfileGuard;
