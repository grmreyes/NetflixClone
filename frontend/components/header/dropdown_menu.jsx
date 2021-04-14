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
        <div className="dropdown-menu">
            <ul className="dropdown-links">
            </ul>
            <ul className="dropdown-logout">
            <button onClick={this.handleLogout} className="logout">hello</button>
            </ul>
        </div>
    );
    }
  }


export default DropdownMenu



