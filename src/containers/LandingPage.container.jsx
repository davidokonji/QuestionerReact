import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from '../components/Landingheader';
import Steps from '../components/utils/steps';
import { teaching, mindMap } from '../Assets';
import Footer from '../components/footer.component';

const LandingPage = ({ redirect }) => {
  if (redirect) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <div>
      <Header
        page='landingpage'
        navClass='nav_header'
      />
      <div className='landingContainer'>
        <div className='topLanding'>
          <div className='top'>
            <img src={teaching} alt='landingimage' className='top_img' />
          </div>
          <Steps />
        </div>
        <div className='bottomLanding'>
          <div className='detail'>
            <div className='detail_img'>
              <img src={mindMap} alt='' />
            </div>
            <div className='detail_text'>
              <p className='detail_title'>
            Questioner
              </p>
              <p className='detail_sub_text'>
            Live your best life. Your One stop for meetup events
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = state => ({
  redirect: state.auth.redirect
});

const Landing = connect(mapStateToProps)(LandingPage);

export {
  Landing,
  LandingPage
};
