import React from 'react';
import { shallow } from 'enzyme';
import SingleMeetupBottom from '../../components/singleMeetupBottom';

describe('Single Meetup Top Component', () => {
  it('should render component correctly', () => {
    const wrapper = shallow(<SingleMeetupBottom />);
    expect(wrapper).toMatchSnapshot();
  });
});
