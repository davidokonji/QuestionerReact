import React from 'react';
import Header from '../components/Landingheader';
import Steps from '../components/utils/steps';

const LandingPage = () => (
  <div>
    <Header
      page="landingpage"
      navClass="nav_header"
    />
    <div className="landingContainer">
      <div className="topLanding">
        <div className="top">
          <img src="../Assets/svg/undraw_teaching_f1cm.svg" alt="landingimage" className="top_img" />
        </div>
        <Steps />
      </div>
      <div className="bottomLanding">
        <div className="detail">
          <div className="detail_img">
            <img src="../Assets/svg/undraw_mind_map_cwng.svg" alt="" />
          </div>
          <div className="detail_text">
            <p className="detail_title">
            Questioner
            </p>
            <p className="detail_sub_text">
            Live your best life. Your One stop for meetup events
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LandingPage;
