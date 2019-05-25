import React from 'react';
import Button from './Button';

const AdminSidebar = () => (
  <div className='col-12 col-md-3'>
    <div className='p-5 shadow-sm'>
      <Button styles='button p-3' text='Create Meetup' />
    </div>
  </div>
);

export default AdminSidebar;
