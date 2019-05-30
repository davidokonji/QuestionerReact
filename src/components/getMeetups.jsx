import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getMeetups, getSingleUser } from '../actions';
import Card from './common/Card';

export class GetMeetups extends Component {
  componentDidMount() {
    const { allMeetups, getUser } = this.props;
    allMeetups();
    getUser();
  }

  render() {
    const {
      meetups: { data = [] },
      history: { push }
    } = this.props;
    return (
      <div className='container-fluid mb-5 mx-md-5 mx-0'>
        <div className='row mb-5 my-5'>
          {
          data.map(meetup => (
            <Card
              id={meetup.id}
              title={meetup.title}
              location={meetup.location}
              tags={meetup.tags}
              happeningOn={meetup.happeningOn}
              images={meetup.images}
              key={meetup.id}
              push={push}
            />
          ))
      }
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  allMeetups: getMeetups,
  getUser: getSingleUser,
};
export const mapStateToProps = state => ({
  meetups: state.meetups,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GetMeetups));
