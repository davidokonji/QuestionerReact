import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <nav className="nav_header">
      <NavLink to="/" className="header_link" exact>Questioner</NavLink>

      <NavLink to="/auth">
        <FontAwesomeIcon icon="user" size="2x" color="white" className="header_icon" />
      </NavLink>
    </nav>
  </div>
);

export default Header;
