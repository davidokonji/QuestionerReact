import { shallow } from 'enzyme';
import React from 'react';
import Dashboard from '../../containers/Dashboard.container';

describe('Dashboard container', () => {
  it('should  render dashboard container', () => {
    const wrapper = shallow(<Dashboard />);

    expect(wrapper).toMatchSnapshot();
  });
});
