import { shallow } from 'enzyme';
import React from 'react';
import { SingleMeetup } from '../../containers/SingleMeetup.container';

describe('Single Meetup container', () => {
  it('should  render Single Meetup container with props', () => {
    const singleMeetup = jest.fn();
    const match = {
      params: {
        id: 1
      }
    };
    const wrapper = shallow(<SingleMeetup singleMeetup={singleMeetup} match={match} />);

    wrapper.setState({
      open: false
    });

    expect(wrapper).toMatchSnapshot();
  });
});
