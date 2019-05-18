import React from 'react';
import { shallow } from 'enzyme';
import { LoginComponent } from '../../components/LoginAuth';

describe('Login Compnent', () => {
  it('should render Login component correctly', () => {
    const wrapper = shallow(<LoginComponent />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle email change', () => {
    const wrapper = shallow(<LoginComponent />);
    const value = 'email@email.com';

    wrapper.find('input').at(0).simulate('change', {
      target: { value }
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle password change', () => {
    const wrapper = shallow(<LoginComponent />);
    const value = 'password';

    wrapper.find('input').at(1).simulate('change', {
      target: { value }
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle form submit', () => {
    const userLogin = jest.fn();

    const wrapper = shallow(<LoginComponent userLogin={userLogin} />);
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
    });

    wrapper.setState({
      error: ''
    });
    expect(wrapper).toMatchSnapshot();
  });
});
