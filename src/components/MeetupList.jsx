import React, { Fragment } from 'react';
import moment from 'moment';
import { confirmAlert } from 'react-confirm-alert';
import Button from './Button';
import { calendar, location } from '../Assets';

const MeetupList = ({
  title, location: meetupLocation, happeningOn, id, deleteOne
}) => {
  const date = moment(happeningOn).format('dddd, MMMM Do YYYY');
  const deleteHandler = () => {
    confirmAlert({
      title: 'Delete meetup',
      message: `Are you sure to delete ${title}`,
      buttons: [
        {
          label: 'Yes',
          onClick: () => deleteOne(id)
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ],
      closeOnEscape: true,
      closeOnClickOutside: true,
    });
  };
  return (
    <Fragment>
      <div className='col-8 col-md-10 border border-left-0 border-right-0'>
        <div className='row'>
          <p className='col-12 ml-3'>
            { title }
          </p>
        </div>
        <div className='row'>
          <p className='col-3 col-md-1'>
            <img src={calendar} alt='date' className='h-75 icon' />
          </p>
          <p className='col-9 col-md-9'>
            { date }
          </p>
        </div>
        <div className='row'>
          <p className='col-3 col-md-1'>
            <img src={location} alt='location' className='h-75 icon' />
          </p>
          <p className='col-9 col-md-9'>
            { meetupLocation }
          </p>
        </div>
      </div>
      <div className='col-4 col-md-2 mt-3 p-0'>
        <Button
          text='Delete'
          styles='px-3 py-1 my-2 btn-danger col-10 rounded-top rounder-bottom'
          event={deleteHandler}
        />
        <Button
          text='View'
          styles='px-3 py-1 my-2 btn-info col-10 rounded-top rounder-bottom'
          event={() => window.location.assign(`/meetup/${id}`)}
        />
      </div>
    </Fragment>
  );
};

export default MeetupList;
