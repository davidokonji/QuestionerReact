import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import Button from './Button';

const Header = (props) => {
  const { navClass, page, history: { push } } = props;
  return (
    <div>
      <nav className={navClass}>
        <NavLink to='/' className='header_link nav-title' exact>Questioner</NavLink>

        {
        page === 'landingpage' && (
          <span
            style={{ color: 'white', textDecoration: 'none' }}
            className='mx-3'
          >
            <Button
              text='signup'
              styles='px-2 py-1 rounded'
              event={() => push('/signup')}
            />
            <Button
              text='Login'
              styles='px-2 py-1 rounded mx-2'
              event={() => push('/login')}
            />
          </span>
        )
      }
      </nav>
    </div>
  );
};

export default withRouter(Header);
