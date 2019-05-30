import React from 'react';
import { shallow } from 'enzyme';
import AuthPage from '../../containers/AuthPage.container';

let wrapper;
const props = {
  match: {
    params: []
  }
};
describe('Auth page', () => {
  beforeAll(() => {
    wrapper = shallow(<AuthPage {...props} />);
  });
  test('should render auth page correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render with state changes', () => {
    wrapper.setState({
      visibility: false,
      formType: 'login',
    });

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.state('formType')).toBe('login');
  });

  it('should get onclick signup', () => {
    wrapper.find('.signup').simulate('click');
    wrapper.find('.login').simulate('click');

    expect(wrapper).toMatchSnapshot();
  });

  it('should get onclick login', () => {
    wrapper.find('.signup').simulate('click');
    wrapper.find('.login').simulate('click');
    expect(wrapper).toMatchSnapshot();
  });
});
