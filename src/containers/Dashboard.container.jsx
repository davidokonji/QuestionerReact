import React, { Fragment } from 'react';
import Meetups from '../components/getMeetups';
import { NavBarConnected } from '../components/common/NavBar';
import Footer from '../components/footer.component';

const Dashboard = () => (
  <Fragment>
    <NavBarConnected />
    <div className=''>
      <Meetups />
    </div>
    <Footer />
  </Fragment>
);

export default Dashboard;
