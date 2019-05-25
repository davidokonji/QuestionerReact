import { shallow } from 'enzyme';
import React from 'react';
import { NavBar } from '../../../components/common/NavBar';

describe('Nav bar component', () => {
  it('should render nav bar correctly', () => {
    const wrapper = shallow(<NavBar isAdmin />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render nav bar correctly', () => {
    const Logout = jest.fn();
    const wrapper = shallow(<NavBar Logout={Logout} isAdmin={false} />);

    wrapper.setState({
      isOpen: false
    });
    wrapper.find('.toggle').simulate('click');
    wrapper.find('.logout').simulate('click');
    expect(wrapper).toMatchSnapshot();
  });
});
