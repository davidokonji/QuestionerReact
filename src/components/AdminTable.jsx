import React from 'react';
import { connect } from 'react-redux';
import MeetupList from './MeetupList';
import { deleteMeetup } from '../actions';

const AdminTable = ({ data, deleteOne }) => (
  <div className='col-11 mx-4 mx-md-0 mt-4 mt-md-0 col-md-9 shadow p-0 table-responsive-sm mb-5'>
    <table className='table table-hover p-0'>
      <thead className='row mx-0'>
        <div className='col-10 col-md-10 bg-light p-3'>
            Available Meetup(s)
        </div>
        <div className='col-2 col-md-2 bg-light p-3'>
            Operation
        </div>
      </thead>
      <tbody className='row p-2 col-12 ml-0 '>
        {
          data.map(meetup => (
            <MeetupList
              id={meetup.id}
              title={meetup.title}
              location={meetup.location}
              tags={meetup.tags}
              happeningOn={meetup.happeningOn}
              images={meetup.images}
              key={meetup.id}
              deleteOne={deleteOne}
            />
          ))
      }
      </tbody>
    </table>
  </div>
);
const mapDispatchToProps = {
  deleteOne: deleteMeetup
};

const AdminDash = connect(null, mapDispatchToProps)(AdminTable);

export {
  AdminDash,
  AdminTable
};
