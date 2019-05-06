import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/footer.component';

describe('Footer component', () => {
  test('should render footer component correctly ', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper).toMatchSnapshot();
  });
});
