import React from 'react';
import {Link} from 'react-router-dom';


class ProfileGuard extends React.Component {
    constructor(props){
        super(props);
        this.hideProf = this.hideProf.bind(this)
        this.handleCameron = this.handleCameron.bind(this)
        this.handleCaster = this.handleCaster.bind(this)
        this.handleCage = this.handleCage.bind(this)
    }

    handleCameron(e) {
        window.picUrl = window.cameron
        this.hideProf();
    }

    handleCaster(e) {
        window.picUrl = window.caster
        this.hideProf();
    }

    handleCage(e) {
        window.picUrl = window.cage
        this.hideProf();
    }

    hideProf(e){
        let pgDiv = document.querySelector('.profile-guard-container');
        pgDiv.classList.add('hidden');
        window.profHidden = true;
        let vid = document.querySelector(".index-video");
        vid.play();

    }

    render() {
        return (
        <div className="profile-guard-container">
            <img src={window.logo} className="pg-header-logo" />
            <h1>Who's watching?</h1>
            <ul className="profile-list">
            <li><Link className="pic-container" to="/browse"><img onClick={this.handleCameron} className="pic-choose" src={window.cameron}/><h2>Cameron</h2></Link></li>
            <li><Link className="pic-container" to="/browse"><img onClick={this.handleCaster} className="pic-choose" src={window.caster}/><h2>Caster</h2></Link></li>
            <li><Link className="pic-container" to="/browse"><img onClick={this.handleCage} className="pic-choose" src={window.cage}/><h2>Cage</h2></Link></li>
            </ul>
        </div>
        );
    }
    }

export default ProfileGuard;
