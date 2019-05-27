import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Protected from '../../utils/authenticate';

describe('Authenticate HOC', () => {
  it('should render HOC component correctly', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Protected component={() => <div>hello</div>} path='/' exact />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
