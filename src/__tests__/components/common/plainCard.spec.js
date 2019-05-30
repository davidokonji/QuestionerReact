import { shallow } from 'enzyme';
import React from 'react';
import PlainCard from '../../../components/common/plainCard';

describe('PlainCard component', () => {
  it('should render correctly', () => {
    const history = {
      push: jest.fn()
    };
    const wrapper = shallow(<PlainCard history={history} />);

    wrapper.find('.plaincard').simulate('click');
    expect(wrapper).toMatchSnapshot();
  });
});
