import { shallow } from 'enzyme';
import React from 'react';
import Questions from '../../../components/common/questionCard';

describe('Question card component', () => {
  it('should render Question card correctly', () => {
    const wrapper = shallow(<Questions />);

    expect(wrapper).toMatchSnapshot();
  });
});
