import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';
import { user } from '../Assets';

const Header = (props) => {
  const { navClass, page } = props;
  return (
    <div>
      <nav className={navClass}>
        <NavLink to='/' className='header_link nav-title' exact>Questioner</NavLink>

        {
        page === 'landingpage' ? (
          <NavLink to='/auth'>
            <img src={user} alt='user' style={{ width: '3rem', marginRight: '3rem' }} />
          </NavLink>
        )
          : (
            ''
          )
      }
      </nav>
    </div>
  );
};

export default Header;
