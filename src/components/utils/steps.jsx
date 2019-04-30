import React from 'react';
import Step from './step';

const Steps = () => (
  <div className="steps">
    <Step
      image="register.svg"
      text="Register as a Questioner user"
    />
    <Step
      image="sign-in.svg"
      text="Login as a User"
    />
    <Step
      image="conference.svg"
      text="You can view Meet Ups and RSVP for any meetup"
    />
    <Step
      image="asking.svg"
      text="Ask Question? any information concerning a Meet Up"
    />
  </div>
);

export default Steps;
