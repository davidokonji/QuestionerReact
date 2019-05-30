import React from 'react';
import { shallow } from 'enzyme';
import { UserProfile, mapStateToProps } from '../../containers/userProfile.container';

let wrapper;

describe('User Profile container', () => {
  beforeAll(() => {
    const props = {
      getUser: jest.fn(),
      getComment: jest.fn(),
      getQuestion: jest.fn(),
      getUpcoming: jest.fn()
    };
    wrapper = shallow(<UserProfile {...props} />);
  });

  it('should render component correctlt', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should return map state to props', () => {
    const state = {
      profile: {
        user: {},
        comments: '',
        questionCount: '',
        upcoming: [],
        loading: true
      }
    };
    const action = mapStateToProps(state);

    expect(action).toEqual({
      user: state.profile.user,
      comment: state.profile.comments,
      questionCount: state.profile.questionCount,
      upcoming: state.profile.upcoming,
      loading: state.profile.loading
    });
  });
});
