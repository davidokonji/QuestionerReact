import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import Button from './Button';

const Header = (props) => {
  const { navClass, page } = props;
  return (
    <div>
      <nav className={navClass}>
        <NavLink to="/" className="header_link" exact>Questioner</NavLink>

        {
        page === 'landingpage' ? (
          <NavLink to="/auth">
            <FontAwesomeIcon icon="user" size="2x" color="white" className="header_icon" />
          </NavLink>
        )
          : (
            <React.Fragment>
              <NavLink to="/auth">
                <Button
                  text="ADMIN"
                  styles="button rn_button sm_button"
                />
              </NavLink>
            </React.Fragment>
          )
      }
      </nav>
    </div>
  );
};

export default Header;
