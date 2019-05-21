import React, { Component } from 'react';
import Question from './common/questionCard';

class SingleMeetupBottom extends Component {
  render() {
    return (
      <div className='py-5'>
        <div>
          <h2>Questions</h2>
        </div>
        <div className='py-5'>
          <p> You have no Question </p>
        </div>
      </div>
    );
  }
}

export default SingleMeetupBottom;
