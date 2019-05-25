import React, { Fragment } from 'react';
import moment from 'moment';
import Button from './Button';
import { calendar, location } from '../Assets';

const MeetupList = ({
  title, location: meetupLocation, happeningOn, id,
  // delete
}) => {
  const date = moment(happeningOn).format('dddd, MMMM Do YYYY');
  // const delte = () => {
  //     this.props.delete(id)
  // }
  return (
    <Fragment>
      <div className='col-10 border border-left-0 border-right-0'>
        <div className='row'>
          <p className='col-12 ml-3'>
            { title }
          </p>
        </div>
        <div className='row'>
          <p className='col-1'>
            <img src={calendar} alt='date' className='h-75 icon' />
          </p>
          <p className='col-9'>
            { date }
          </p>
        </div>
        <div className='row'>
          <p className='col-1'>
            <img src={location} alt='location' className='h-75 icon' />
          </p>
          <p className='col-9'>
            { meetupLocation }
          </p>
        </div>
      </div>
      <div className='col-2 mt-3'>
        <Button
          text='Delete'
          styles='px-3 py-1 my-2 btn-danger col-10 rounded-top rounder-bottom'
          // event={delte}
        />
        <Button text='View' styles='px-3 py-1 my-2 btn-info col-10 rounded-top rounder-bottom' />
      </div>
    </Fragment>
  );
};

export default MeetupList;
