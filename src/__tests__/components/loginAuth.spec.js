import React from 'react';
import { shallow } from 'enzyme';
import { LoginComponent, mapStateToProps } from '../../components/LoginAuth';

let wrapper;
describe('Login Compnent', () => {
  beforeAll(() => {
    const userLogin = jest.fn();
    const user = {
      message: ''
    };
    const history = {
      push: jest.fn()
    };
    const redirect = {
      redirect: true
    };
    wrapper = shallow(<LoginComponent userLogin={userLogin} history={history} redirect={redirect} user={user} />);
  });

  it('should handle email change', () => {
    const value = 'email@email.com';

    wrapper.find('input').at(0).simulate('change', {
      target: { value }
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle password change', () => {
    const value = 'password';

    wrapper.find('input').at(1).simulate('change', {
      target: { value }
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle form submit', () => {
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
    });

    wrapper.setState({
      error: ''
    });
    expect(wrapper).toMatchSnapshot();
  });
});
