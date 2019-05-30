import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from '../../components/Landingheader';
import Button from '../../components/Button';

let wrapper;

describe('Landing Header component', () => {
  beforeAll(() => {
    wrapper = shallow(<Header page='landingpage' navClass='landing' />);
  });
  test('should render header component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
