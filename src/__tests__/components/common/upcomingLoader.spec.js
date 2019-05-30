import { shallow } from 'enzyme';
import React from 'react';
import Loader from '../../../components/common/upcomingLoader';

describe('Upcoming Loader', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Loader />);

    expect(wrapper).toMatchSnapshot();
  });
});
