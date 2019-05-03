import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Landingheader';

describe('Landing Header component', () => {
  test('should render header component correctly', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should render header component with props', () => {
    const wrapper = shallow(<Header page="landingpage" navClass="landing" />);
    expect(wrapper).toMatchSnapshot();
  });
});
