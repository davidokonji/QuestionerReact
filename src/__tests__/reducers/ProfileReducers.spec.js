import {
  GET_SINGLE_USER,
  GET_UPCOMING_USER_MEETUP,
  GET_QUESTION_COUNT,
  GET_COMMENT_COUNT,
  GET_UPCOMING_LOADING,
} from '../../action-types';
import { profileReducer } from '../../reducers';

describe('Profile Reducer', () => {
  it('should return default state', () => {
    const reducer = profileReducer(undefined, {
      type: '@@INIT'
    });
    expect(reducer).toEqual({});
  });

  it('should return single user object', () => {
    const reducer = profileReducer(undefined, {
      type: GET_SINGLE_USER,
      payload: {}
    });
    expect(reducer).toEqual({
      user: {}
    });
  });

  it('should return upcoming user meetups', () => {
    const reducer = profileReducer(undefined, {
      type: GET_UPCOMING_USER_MEETUP,
      payload: []
    });

    expect(reducer).toEqual({
      upcoming: [],
      loading: false
    });
  });

  it('should return upcoming loading object', () => {
    const reducer = profileReducer(undefined, {
      type: GET_UPCOMING_LOADING,
      loading: true
    });

    expect(reducer).toEqual({
      loading: true
    });
  });

  it('should return get question count', () => {
    const reducer = profileReducer(undefined, {
      type: GET_QUESTION_COUNT,
      payload: [],
      count: 1
    });

    expect(reducer).toEqual({
      questions: [],
      questionCount: 1
    });
  });

  it('should return get comment count', () => {
    const reducer = profileReducer(undefined, {
      type: GET_COMMENT_COUNT,
      count: 1
    });

    expect(reducer).toEqual({
      comments: 1
    });
  });
});
