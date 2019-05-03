import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from '../../containers/LandingPage.container';

describe('Landing Page', () => {
  test('should render landing page correctly', () => {
    const wrapper = shallow(<LandingPage />);

    expect(wrapper).toMatchSnapshot();
  });
});
