import { shallow } from 'enzyme';
import React from 'react';
import { NavBar } from '../../../components/common/NavBar';

describe('Nav bar component', () => {
  it('should render nav bar correctly', () => {
    const wrapper = shallow(<NavBar />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render nav bar correctly', () => {
    const wrapper = shallow(<NavBar />);

    wrapper.setState({
      isOpen: false
    });
    wrapper.find('.toggle').simulate('click');
    expect(wrapper).toMatchSnapshot();
  });
});
