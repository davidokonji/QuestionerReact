import React from 'react';
import { like } from '../Assets';

const Footer = () => (
  <footer id='sticky-footer' className='py-4 footer page-footer fixed-bottom mt-5'>
    <div className='container text-center'>
      <small>
      Created with
        <img src={like} alt='love' style={{ width: '12px', marginLeft: '5px', marginRight: '5px' }} />
       by Okonji Chukwunonso
      </small>
    </div>
  </footer>
);

export default Footer;
