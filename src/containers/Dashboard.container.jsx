import React, { Fragment } from 'react';
import Meetups from '../components/getMeetups';
import Navbar from '../components/common/NavBar';
import Footer from '../components/footer.component';

const Dashboard = () => (
  <Fragment>
    <Navbar />
    <div className=''>
      <Meetups />
    </div>
    <Footer />
  </Fragment>
);

export default Dashboard;
