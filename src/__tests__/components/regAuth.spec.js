import React from 'react';
import { shallow } from 'enzyme';
import { Register } from '../../components/RegAuth';

let wrapper;
const user = {
  message: ''
};
const history = {
  push: jest.fn()
};

describe('Register Compnent', () => {
  beforeAll(() => {
    const userRegister = jest.fn();

    wrapper = shallow(<Register user={user} userRegister={userRegister} history={history} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle firstname change', () => {
    const value = 'john';

    wrapper.find('input').at(0).simulate('change', {
      target: { value }
    });
    expect(wrapper).toMatchSnapshot();
  });
  it('should handle firstname change', () => {
    const value = 'snow';

    wrapper.find('input').at(1).simulate('change', {
      target: { value }
    });
    expect(wrapper).toMatchSnapshot();
  });
  it('should handle password change', () => {
    const value = 'password1234';

    wrapper.find('input').at(4).simulate('change', {
      target: { value }
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle password change', () => {
    const value = 'password';

    wrapper.find('input').at(4).simulate('change', {
      target: { value }
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle form submit', () => {
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
    });
    expect(wrapper).toMatchSnapshot();
  });
});
