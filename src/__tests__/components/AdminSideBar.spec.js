import React from 'react';
import { shallow } from 'enzyme';
import { AdminSidebar } from '../../components/AdminSidebar';

describe('Admin sidebar component', () => {
  it('should render component correctly', () => {
    const toggle = jest.fn();
    const open = false;
    const wrapper = shallow(<AdminSidebar toggle={toggle} open={open} />);

    expect(wrapper).toMatchSnapshot();
  });
});
