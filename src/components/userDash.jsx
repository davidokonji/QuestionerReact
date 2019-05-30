import React, { Component } from 'react';
import moment from 'moment';
import Loader from './common/upcomingLoader';
import PlainCard from './common/plainCard';

class UserTabs extends Component {
  render() {
    const {
      comment = 0,
      count = 0,
      upcoming = [[{}]],
      loading = false,
      message,
      status
    } = this.props;
    let data;
    if (loading) {
      data = (
        <div className='col-12 col-md-12'>
          <Loader />
        </div>
      );
    } else if (loading === false && status !== 404) {
      data = (
        upcoming.map(meetup => (
          meetup.map((meet) => {
            const date = moment(meet.happeningon).format('MMM D [at] h:mm a');
            return (
              <PlainCard
                key={meet.id}
                id={meet.id}
                date={date}
                topic={meet.topic}
                location={meet.location}
              />
            );
          })
        ))
      );
    } else {
      data = (<h2>You have no upcoming meetup</h2>);
    }

    return (
      <div className='col-12 col-md-8 mt-3'>
        <div className='m-2'>
          <div className='top-bar row ml-2 ml-md-0'>
            <div className='col pl-md-5 pl-2 d-flex justify-content-center flex-column'>
              <h2 className='align-self-center'>
                Question(s) posted
              </h2>
              <p className='align-self-center'>
                {count || 0}
              </p>
            </div>
            <div className='col pl-md-5 pl-2 d-flex justify-content-center flex-column'>
              <h2 className='align-self-center'>
                Question(s) commented
              </h2>
              <h3 className='align-self-center'>
                {comment || 0}
              </h3>
            </div>
          </div>
          <div className='bottom-tabs mt-5 col-12 col-md-12'>
            <h3 className='mt-5 mb-5'>
                Upcoming Meetups for you
            </h3>
            <div className='row ml-1 ml-md-0'>
              {
                data
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserTabs;
