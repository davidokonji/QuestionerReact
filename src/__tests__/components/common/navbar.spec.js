import { shallow } from 'enzyme';
import React from 'react';
import Navbar from '../../../components/common/NavBar';

describe('Nav bar component', () => {
  it('should render nav bar correctly', () => {
    const wrapper = shallow(<Navbar />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render nav bar correctly', () => {
    const wrapper = shallow(<Navbar />);

    wrapper.setState({
      isOpen: false
    });
    wrapper.find('.toggle').simulate('click');
    expect(wrapper).toMatchSnapshot();
  });
});
