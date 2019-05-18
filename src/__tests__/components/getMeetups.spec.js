import React from 'react';
import { shallow } from 'enzyme';
import { GetMeetups, mapStateToProps } from '../../components/getMeetups';

const data = {
  data: [
    {
      id: '1',
      title: 'this is a test',
      location: 'lagos',
      happeningOn: '',
      tags: ['test'],
      images: ''
    }
  ]
};

const dataEmpty = {
  data: []
};

const meetups = {
  meetups: {
    id: '1',
    title: 'this is a test',
    location: 'lagos',
    happeningOn: '',
    tags: ['test']
  }
};

describe('Get meetups Compnent', () => {
  it('should render get meetups component correctly', () => {
    const allMeetups = jest.fn();
    const wrapper = shallow(<GetMeetups meetups={dataEmpty} allMeetups={allMeetups} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render get meetups component correctly', () => {
    const allMeetups = jest.fn();
    const wrapper = shallow(<GetMeetups meetups={data} allMeetups={allMeetups} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should return mapstatetoprops object', () => {
    const state = mapStateToProps(meetups);

    expect(state).toEqual({
      meetups: meetups.meetups
    });
  });
});
