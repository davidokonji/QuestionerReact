import { shallow } from 'enzyme';
import React from 'react';
import Modal from '../../../components/common/modal';

describe('modal component', () => {
  it('should render modal correctly', () => {
    const wrapper = shallow(<Modal />);

    expect(wrapper).toMatchSnapshot();
  });
});
