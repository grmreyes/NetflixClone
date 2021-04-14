import React from 'react';
import {Link} from 'react-router-dom';
import NavLinks from './nav_links'
import SearchBar from './search_bar'
import DropdownButton from './dropdown_button'

class Header extends React.Component {
    constructor(props){
        super(props)

        window.addEventListener('scroll', (event) => {
          
          if ($(window).scrollTop() < 100) {
            $('#navbar').removeClass('header').addClass('header-trans');
          }
          else{
            $('#navbar').removeClass('header-trans').addClass('header');
          }
        });
    }



  render() {

    
    
    return (
        <div className = "header" id="navbar">        
            <Link to="/browse">
              <img src={window.logo} className="header-logo" />
            </Link>
            <NavLinks />
            <SearchBar history={this.props.history}/>
            <DropdownButton/>
        </div>

    );
  }
}

export default Header;

// for username: <h2>{this.props.currentUser.username}!</h2>
