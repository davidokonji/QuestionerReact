import React from 'react';
import { shallow, mount } from 'enzyme';
import Protected from '../../utils/authenticate';

describe('Authenticate HOC', () => {
  it('should render HOC component correctly', () => {
    const wrapper = shallow(<Protected />);

    expect(wrapper).toMatchSnapshot();
  });
});
