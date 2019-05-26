import React from 'react';
import { shallow } from 'enzyme';
import MeetupList from '../../components/MeetupList';

const data = {
  title: '',
  location: '',
  happeningOn: '',
  id: ''
};

describe('Meetup list component', () => {
  it('should render component correctly', () => {
    const wrapper = shallow(<MeetupList {...data} />);

    expect(wrapper).toMatchSnapshot();
  });
});
