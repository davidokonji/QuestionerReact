import React from 'react';
import { shallow } from 'enzyme';
import Routes from '../../routes/App.routes';

describe('Routes', () => {
  it('should render routes jsx', () => {
    const wrapper = shallow(<Routes />);

    expect(wrapper).toMatchSnapshot();
  });
});
