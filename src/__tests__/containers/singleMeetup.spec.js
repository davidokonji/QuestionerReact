import { shallow, mount } from 'enzyme';
import React from 'react';
import { SingleMeetup } from '../../containers/SingleMeetup.container';
import SingleMeetupTop from '../../components/singleMeetupTop';


describe('Single Meetup container', () => {
  it('should  render Single Meetup container with props', () => {
    const singleMeetup = jest.fn();
    const match = {
      params: {
        id: 1
      }
    };
    const wrapper = shallow(<SingleMeetup
      singleMeetup={singleMeetup}
      match={match}
      successful
    />);

    wrapper.setState({
      open: false
    });

    wrapper.find(SingleMeetupTop).dive().setProps({ open: true }).find('button')
      .simulate('click');

    expect(wrapper).toMatchSnapshot();
  });

  it('should  render Single Meetup container with props', () => {
    const singleMeetup = jest.fn();
    const match = {
      params: {
        id: 1
      }
    };
    const wrapper = shallow(<SingleMeetup
      singleMeetup={singleMeetup}
      match={match}
      successful={false}
      message='something'
    />);

    wrapper.setState({
      open: false
    });

    wrapper.find(SingleMeetupTop).dive().setProps({ open: true }).find('button')
      .simulate('click');

    expect(wrapper).toMatchSnapshot();
  });
});
