import React from 'react';
import Step from './step';
import {
  register,
  signIn,
  conference,
  asking
} from '../../Assets';

const Steps = () => (
  <div className='steps'>
    <Step
      image={register}
      text='Register as a Questioner user'
    />
    <Step
      image={signIn}
      text='Login as a User'
    />
    <Step
      image={conference}
      text='You can view Meet Ups and RSVP for any meetup'
    />
    <Step
      image={asking}
      text='Ask Question? any information concerning a Meet Up'
    />
  </div>
);

export default Steps;
