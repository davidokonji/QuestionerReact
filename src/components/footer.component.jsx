import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => (
  <footer className="footer">
    <div className="footerBottom">
      <p>
       Created with
        {<FontAwesomeIcon icon="heart" size="sm" color="red" style={{ paddingLeft: '1rem', paddingRight: '1rem' }} />}
       by Okonji Chukwunonso
      </p>
    </div>
  </footer>
);

export default Footer;
