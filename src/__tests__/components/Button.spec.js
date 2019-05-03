import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../components/Button';

describe('Button component', () => {
  test('should render button component correctly', () => {
    const wrapper = shallow(<Button />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should render button component with props', () => {
    const wrapper = shallow(<Button text="hello" styles="hellostyle" />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.hasClass('hellostyle')).toBeTruthy();
  });
});
