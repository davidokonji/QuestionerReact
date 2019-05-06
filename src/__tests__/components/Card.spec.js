import React from 'react';
import { shallow } from 'enzyme';
import Card from '../../components/common/Card';


const data = {
  id: '1',
  title: 'this is a test',
  images: '',
  location: 'lagos',
  happeningOn: '',
  tags: ['test']
};

describe('Card component', () => {
  it('should render card component', () => {
    const wrapper = shallow(<Card />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render card component with props', () => {
    const wrapper = shallow(<Card {...data} />);

    expect(wrapper).toMatchSnapshot();
  });
});
