import React from 'react';
import { shallow } from 'enzyme';
import { AdminDashboard } from '../../containers/AdminDashboard.container';

const meetup = {
  meetups: {
    data: []
  }
};

const allMeetups = jest.fn();

describe('Admin container', () => {
  it('should render container correctly', () => {
    const wrapper = shallow(<AdminDashboard meetups={meetup} allMeetups={allMeetups} />);
    expect(wrapper).toMatchSnapshot();
  });
});
