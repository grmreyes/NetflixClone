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
            <div className="header-left">       
              <Link to="/browse">
                <img src={window.logo} className="header-logo" />
              </Link>
              <NavLinks />
            </div> 
            <div className="header-right"> 
              <SearchBar history={this.props.history}/>
              <DropdownButton/>
            </div>
        </div>

    );
  }
}

export default Header;
