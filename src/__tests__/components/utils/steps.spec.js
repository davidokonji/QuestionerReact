import React from 'react';
import { shallow } from 'enzyme';
import Steps from '../../../components/utils/steps';

test('should render step component correctly', () => {
  const wrapper = shallow(<Steps />);

  expect(wrapper).toMatchSnapshot();
});
