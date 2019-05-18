import React from 'react';
import { shallow } from 'enzyme';
import { Register } from '../../components/RegAuth';

describe('Register Compnent', () => {
  it('should render register component correctly', () => {
    const wrapper = shallow(<Register />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle firstname change', () => {
    const wrapper = shallow(<Register />);
    const value = 'john';

    wrapper.find('input').at(0).simulate('change', {
      target: { value }
    });
    expect(wrapper).toMatchSnapshot();
  });
  it('should handle firstname change', () => {
    const wrapper = shallow(<Register />);
    const value = 'snow';

    wrapper.find('input').at(1).simulate('change', {
      target: { value }
    });
    expect(wrapper).toMatchSnapshot();
  });
  it('should handle password change', () => {
    const wrapper = shallow(<Register />);
    const value = 'password1234';

    wrapper.find('input').at(4).simulate('change', {
      target: { value }
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle password change', () => {
    const wrapper = shallow(<Register />);
    const value = 'password';

    wrapper.find('input').at(4).simulate('change', {
      target: { value }
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle form submit', () => {
    const userRegister = jest.fn();

    const wrapper = shallow(<Register userRegister={userRegister} />);
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
    });
    expect(wrapper).toMatchSnapshot();
  });
});
