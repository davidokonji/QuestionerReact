import React from 'react';
import { shallow, mount } from 'enzyme';
import Protected from '../../utils/authenticate';

describe('Authenticate HOC', () => {
  it('should render HOC component correctly', () => {
    const wrapper = shallow(<Protected component={() => <div>hello</div>} path='/' exact />);

    expect(wrapper).toMatchSnapshot();
  });
});
