import React from 'react';
import { shallow } from 'enzyme';
import Step from '../../../components/utils/step';

test('should render step component correctly', () => {
  const wrapper = shallow(<Step text="step" />);

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.hasClass('step')).toBeTruthy();
  expect(wrapper.find('p').text()).toBe('step');
});
