import React from 'react';
import { shallow } from 'enzyme';
import SingleMeetupTop from '../../components/singleMeetupTop';

const data = {
  id: '1',
  title: 'this is a test',
  location: 'lagos',
  happeningOn: '',
  tags: ['test']
};

const toggle = jest.fn();

describe('Single Meetup Top Component', () => {
  it('should render component correctly', () => {
    const wrapper = shallow(<SingleMeetupTop />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component correctly with props', () => {
    const wrapper = shallow(<SingleMeetupTop {...data} toggle={toggle} open={false} />);
    expect(wrapper).toMatchSnapshot();
  });
});
