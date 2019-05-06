import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getMeetups } from '../actions';
import Card from './common/Card';

export class GetMeetups extends Component {
  async componentDidMount() {
    const { allMeetups } = this.props;
    await allMeetups();
  }

  render() {
    const { meetups: { data = [] } } = this.props;
    return (
      <div className='container-fluid mb-5 mx-md-5 mx-0'>
        <div className='row mb-5'>
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
            />
          ))
      }
        </div>
        <div className='mb-5'> button </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  allMeetups: getMeetups,
};
export const mapStateToProps = state => ({
  meetups: state.meetups,
});

export default connect(mapStateToProps, mapDispatchToProps)(GetMeetups);
