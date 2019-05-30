import React, { Component } from 'react';
import { user } from '../Assets';
import Button from './Button';

class UserSidebar extends Component {
  render() {
    const {
      images = [],
      firstname = '',
      lastname = '',
      username = '',
      about = ''
    } = this.props;
    return (
      <div className='col-12 col-md-3 shadow-sm ml-md-5 ml-4 mt-3'>
        <div className='m-5'>
          <div className='col-12'>
            <img
              src={images ? images[0] : user}
              alt='profile'
              className='rounded-circle my-3'
              style={{ objectFit: 'cover', height: '18rem', width: '18rem' }}
            />
          </div>
          <div className='my-3'>
            <h2>
              {`${firstname} ${lastname}`}
            </h2>
          </div>
          <div className='my-3'>
            {username}
          </div>
          <div className='my-3'>
            {about}
          </div>
          <div className='my-3'>
            <Button text='edit profile' styles='btn p-0' />
          </div>
        </div>
      </div>
    );
  }
}

export default UserSidebar;
