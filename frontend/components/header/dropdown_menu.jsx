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



    // <a href="https://github.com/grmreyes/">
    // <i className="fab fa-github"></i>
    // </a>
    // <a href="https://www.linkedin.com/in/grmreyes/">
    //     <i className="fab fa-linkedin"></i>
    // </a>
    // <a href="mailto:grmreyes@gmail.com">
    //     <i className="far fa-envelope"></i>
    // </a>
    render(){
    return (
        <div className="dropdown-container">
            <div className="arrow-up"></div>
            <div className="dropdown-menu">
                <ul className="dropdown-links">
                <li><a href="https://github.com/grmreyes/" target="_blank">
                    <i className="fab fa-github dropdown-icon"></i>
                            <div className="link-text">GitHub</div>
                        </a>
                    </li>
                    <li><a href="https://www.linkedin.com/in/grmreyes/" target="_blank">
                    <i className="fab fa-linkedin dropdown-icon"></i>
                            <div className="link-text">LinkedIn</div>
                        </a>
                    </li>
                    <li><a href="mailto:grmreyes@gmail.com/" target="_blank">
                        <i className="far fa-envelope dropdown-icon"></i>
                        <div className="link-text">Email</div>
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



