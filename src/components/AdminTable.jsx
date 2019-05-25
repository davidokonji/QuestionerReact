import React from 'react';
import MeetupList from './MeetupList';

const AdminTable = ({ data, toggle }) => (

  // const deleteMeeteps = ( id) => {
  //     this.props.delete(id)
  // }
  <div className='col-11 mx-4 mx-md-0 mt-4 mt-md-0 col-md-9 shadow p-0 table-responsive-sm'>
    <table className='table table-hover p-0'>
      <thead className='row mx-0'>
        <div className='col-10 bg-light p-3'>
            Available Meetup(s)
        </div>
        <div className='col-2 bg-light p-3'>
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
              // delete={delteMeetups}
            //   deleteDialog={toggle}
            />
          ))
      }
      </tbody>
    </table>
  </div>
);

export default AdminTable;
