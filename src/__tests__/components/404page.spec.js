import React from 'react';
import { shallow } from 'enzyme';
import Notfound from '../../components/404page';

describe('404 page', () => {
  test('should render 404 page correctly', () => {
    const wrapper = shallow(<Notfound />);

    expect(wrapper).toMatchSnapshot();
  });
});
