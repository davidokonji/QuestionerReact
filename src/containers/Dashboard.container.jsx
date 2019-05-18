import React, { Fragment } from 'react';
import Meetups from '../components/getMeetups';
import Navbar from '../components/common/NavBar';

const Dashboard = () => (
  <Fragment>
    <Navbar />
    <div className=''>
      <Meetups />
    </div>
  </Fragment>
);

export default Dashboard;
