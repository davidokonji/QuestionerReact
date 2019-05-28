import React from 'react';
import { shallow, mount } from 'enzyme';
import SingleMeetupTop from '../../components/singleMeetupTop';

const data = {
  id: '1',
  title: 'this is a test',
  location: 'lagos',
  happeningOn: '',
  tags: ['test']
};

const toggle = jest.fn();
const rsvp = jest.fn();
const addQuestion = jest.fn();

describe('Single Meetup Top Component', () => {
  it('should render component correctly', () => {
    const wrapper = shallow(<SingleMeetupTop />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component correctly with props', () => {
    const wrapper = shallow(<SingleMeetupTop {...data} toggle={toggle} open={false} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component correctly with props', () => {
    const wrapper = mount(<SingleMeetupTop {...data} toggle={toggle} open={false} rsvp={rsvp} />);

    wrapper.find('.yes').simulate('click');
    wrapper.find('.no').simulate('click');
    wrapper.find('.maybe').simulate('click');

    expect(wrapper).toMatchSnapshot();
  });

  it('should render component ', () => {
    const wrapper = mount(<SingleMeetupTop {...data} toggle={toggle} open rsvp={rsvp} addQuestion={addQuestion} />);

    wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('should render component ', () => {
    const wrapper = mount(<SingleMeetupTop {...data} toggle={toggle} open />);

    wrapper.find('input').simulate('change');

    expect(wrapper).toMatchSnapshot();
  });
});
