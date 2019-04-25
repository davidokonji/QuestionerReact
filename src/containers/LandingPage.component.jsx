import React from 'react';
import Header from '../components/Landingheader.component';

const LandingPage = () => (
  <div>
    <Header />
    <div className="landingContainer">
      <div className="topLanding">
        <div className="top">
          <img src="../Assets/svg/undraw_teaching_f1cm.svg" alt="landingimage" className="top_img" />
        </div>
        <div className="steps">
          <div className="step">
            <span><img src="../Assets/svg/register.svg" alt="" width="70px" height="90px" /></span>
            <p className="step_text">
        Register as a Questioner user
            </p>
          </div>
          <div className="step">
            <span><img src="../Assets/svg/sign-in.svg" alt="" width="70px" height="90px" /></span>
            <p className="step_text">
      Register as a Questioner user
            </p>
          </div>
          <div className="step">
            <span><img src="../Assets/svg/conference.svg" alt="" width="70px" height="90px" /></span>
            <p className="step_text">
    Register as a Questioner user
            </p>
          </div>
          <div className="step">
            <span><img src="../Assets/svg/asking.svg" alt="" width="70px" height="90px" /></span>
            <p className="step_text">
      Register as a Questioner user
            </p>
          </div>
        </div>
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
