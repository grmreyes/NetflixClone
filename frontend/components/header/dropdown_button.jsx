import React from 'react';
import DropdownMenuContainer from './dropdown_menu_container'


function DropDownButton() {
    return (
      <div className="dropdown-button-container">
          <img src={window.picUrl} className="dropdown-button" />
          <DropdownMenuContainer/>
      </div>
    );
  }


export default DropDownButton