import React from 'react';
import { shallow } from 'enzyme';
import UserSidebar from '../../components/userSidebar';

let wrapper;

describe('User Sidebar', () => {
  beforeAll(() => {
    wrapper = shallow(<UserSidebar />);
  });
  it('should render component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component with props', () => {
    const props = {
      images: [''],
      firstname: '',
      lastname: '',
      username: '',
      about: ''
    };
    wrapper = shallow(<UserSidebar {...props} />);
  });
});
