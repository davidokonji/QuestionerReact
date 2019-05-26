import React from 'react';
import { shallow } from 'enzyme';
import AdminTable from '../../components/AdminTable';

describe('Admin table component', () => {
  it('should render component correctly', () => {
    const toggle = jest.fn();
    const data = [];
    const wrapper = shallow(<AdminTable toggle={toggle} data={data} />);

    expect(wrapper).toMatchSnapshot();
  });
});
