import React from 'react';
import {Link} from 'react-router-dom';

//<li className="nav-link"><Link to="/browse">My List</Link></li>
function NavLinks() {
    return (
      <ul className="nav-links-container">
          <li className="nav-link-item"><Link className="nav-link" to="/browse/Action">Action</Link></li>
          <li className="nav-link-item"><Link className="nav-link" to="/browse/Comedy">Comedy</Link></li>
          <li className="nav-link-item"><Link className="nav-link" to="/browse/Family">Family</Link></li>
          <li className="nav-link-item"><Link className="nav-link" to="/browse">Home</Link></li>
          <li className="nav-link-item"><Link className="nav-link" to="/browse/Romance">Romance</Link></li>   
      </ul>
    );
  }


export default NavLinks