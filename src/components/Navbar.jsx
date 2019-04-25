import React from 'react';
import '../style/Navbar.scss';

const Navigation = () => (
  <React.Fragment>
    <nav>
      <span className="Navlogo">
        Questioner
      </span>
      <ul>
        <li>
          Home
        </li>
        <li>
          <a href="/">
          sign up
          </a>
        </li>
      </ul>
    </nav>
  </React.Fragment>
);


export default Navigation;
