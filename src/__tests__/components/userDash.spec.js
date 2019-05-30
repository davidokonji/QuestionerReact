import React from 'react';
import { shallow } from 'enzyme';
import UserDash from '../../components/userDash';

let wrapper;
const props = {
  comment: 0,
  count: 0,
  upcoming: [[{}], [{}]],
  loading: true
};
describe('User Dashboard', () => {
  beforeAll(() => {
    wrapper = shallow(<UserDash {...props} />);
  });

  it('should render component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render when loading is false', () => {

    wrapper = shallow(<UserDash {...props} loading={false} />);

    expect(wrapper).toMatchSnapshot();
  });
});
