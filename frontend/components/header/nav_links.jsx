import React from 'react';
import {Link} from 'react-router-dom';


function NavLinks() {
    return (
      <ul className="nav-links-container">
          <li className="nav-link-item"><Link className="nav-link" to="/browse">Home</Link></li>
          <li className="nav-link-item"><Link className="nav-link" to="/browse/Action">Action</Link></li>
          <li className="nav-link-item"><Link className="nav-link" to="/browse/Comedy">Comedy</Link></li>
          <li className="nav-link-item"><Link className="nav-link" to="/browse/Family">Family</Link></li>
          <li className="nav-link-item"><Link className="nav-link" to="/browse/Romance">Romance</Link></li>   
          <li className="nav-link-item"><Link className="nav-link" to="/browse/MyList">My List</Link></li>  
      </ul>
    );
  }


export default NavLinks