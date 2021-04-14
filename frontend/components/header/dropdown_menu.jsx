import React from 'react';
import {Link} from 'react-router-dom';


class DropdownMenu extends React.Component {
    constructor(props){
        super(props)
        this.handleLogout = this.handleLogout.bind(this)
    }


    handleLogout(){
        window.profHidden = false;
        this.props.logout();
    }

    render(){
    return (
        <div className="dropdown-container">
            <div className="arrow-up"></div>
            <div className="dropdown-menu">
                <ul className="dropdown-links">
                    <li><a href="https://github.com/grmreyes/">
                            <img src={window.github} className="dropdown-icon"/>
                            <div className="link-text">Github</div>
                        </a>
                    </li>
                    <li><a href="mailto:grmreyes@gmail.com/">
                        <img src={window.email} className="dropdown-icon"/>
                        <div className="link-text">Email me</div>
                        </a>
                    </li>
                </ul>
                <ul className="dropdown-logout">
                    <li onClick={this.handleLogout} className="logout">Sign out of Nicflix</li>
                </ul>
            </div>
        </div>
    );
    }
  }


export default DropdownMenu



