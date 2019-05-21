import React, { Component, Fragment } from 'react';
import Button from './Button';
import { calendar, location } from '../Assets';
import Modal from './common/modal';

const SingleMeetupTop = ({
  topic, location: meetupLocation, happeningOn, images, tags, toggle, open
} = {}) => (
  <Fragment>
    <div className='d-flex flex-md-row flex-column justify-content-center col-12'>
      <div className='col-12 col-md p-0 m-0'>
        <img src={images} alt='meetupImage' className='mt-md-3 m-0 p-0 meetup-img col-12' />
      </div>
      <div className='meetup-info ml-4 mt-md-5 mt-2 col'>
        <div className='my-5'>
          <h2 className='meetup-title'>
            {topic}
          </h2>
        </div>
        <div className='meetup-date my-4 row'>
          <p className='col-2 mr-0'>
            <img src={calendar} alt='date' className='h-75 icon' />
          </p>
          <p className='col-9'>
            { happeningOn }
          </p>
        </div>
        <div className='meetup-location my-4 row'>
          <p className='col-2'>
            <img src={location} alt='location' className='h-75 icon' />
          </p>
          <p className='col-9'>
            {meetupLocation}
          </p>
        </div>
        <div className='meetup-rsvp my-4 row'>
          <p className='col-2'>
            RSVP
          </p>
          <div className='col-1'>
            Yes
          </div>
        </div>
        <div className='meetup-tags my-4'>
            Tags
        </div>
        <div className='meetup-question my-4'>
          <Button styles='btn col-md-8 my-4 col-10' text=' Ask Question' event={toggle} />
        </div>

      </div>
    </div>
    <Modal toggle={toggle} open={open} className='my-5 shadow-sm'>
      <form className='my-5'>
        <div className='form-group mx-3 my-3'>
          <small id='subject' className='form-text text-muted'>Question Subject</small>
          <input
            type='email'
            className='form-control p-4 shadow-none '
            aria-describedby='questionTitle'
            placeholder='Add a question title'
            style={{ fontSize: '1rem' }}
          />
        </div>
        <div className='form-group my-3 mx-3 '>
          <textarea
            className='form-control form-control-lg p-2 shadow-none '
            rows='4'
            placeholder='Talk about the question...'
          />
        </div>
        <p>
          <Button styles='btn my-2 py-0 col-12' text='POST' event={toggle} />
        </p>
      </form>
    </Modal>
  </Fragment>
);

export default SingleMeetupTop;
