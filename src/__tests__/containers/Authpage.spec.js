import React from 'react';
import { shallow } from 'enzyme';
import AuthPage from '../../containers/AuthPage.container';

describe('Auth page', () => {
  test('should render auth page correctly', () => {
    const wrapper = shallow(<AuthPage />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should render with state changes', () => {
    const wrapper = shallow(<AuthPage />);

    wrapper.setState({
      visibility: false,
      formType: 'login',
    });

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.state('formType')).toBe('login');
  });
});
