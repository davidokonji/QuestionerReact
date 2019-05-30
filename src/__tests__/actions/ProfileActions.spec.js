import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from '../../config/axiosConfig';
import {
  getSingleUserHandler,
  getUpcomingLoading,
  getUserUpcomingHandler,
  getUserCommentCountHandler,
  getUserQuestionCountHandler,
  getSingleUser,
  getUserCommentCount,
  getUserQuestionCount,
  getUserUpcoming,
} from '../../actions';

import {
  GET_SINGLE_USER,
  GET_UPCOMING_USER_MEETUP,
  GET_QUESTION_COUNT,
  GET_COMMENT_COUNT,
  GET_UPCOMING_LOADING
} from '../../action-types';


const middleware = [thunk];
const mockedStore = configureMockStore(middleware);

const store = mockedStore({});

describe('Profile Actions', () => {
  it('should return get single user handler object', () => {
    const action = getSingleUserHandler({});

    expect(action).toEqual({
      type: GET_SINGLE_USER,
      payload: {}
    });
  });

  it('should return get upcoming loading object', () => {
    const action = getUpcomingLoading();

    expect(action).toEqual({
      type: GET_UPCOMING_LOADING,
    });
  });

  it('should return get user upcoming object', () => {
    const action = getUserUpcomingHandler([]);

    expect(action).toEqual({
      type: GET_UPCOMING_USER_MEETUP,
      payload: []
    });
  });
  it('should return get user comments count object ', () => {
    const action = getUserCommentCountHandler(1);

    expect(action).toEqual({
      type: GET_COMMENT_COUNT,
      count: 1
    });
  });
  it('should get user question count object', () => {
    const action = getUserQuestionCountHandler(1, []);

    expect(action).toEqual({
      type: GET_QUESTION_COUNT,
      count: 1,
      payload: []
    });
  });
  it('should get single user action creator', () => {
    axios.get = jest.fn().mockReturnValue(Promise.resolve({
      data: {
        data: []
      }
    }));
    const expected = {
      type: GET_SINGLE_USER,
    };

    return store.dispatch(getSingleUser()).then(() => {
      expect(store.getActions()[0].type).toEqual(expected.type);
    });
  });
  it('should get comment count action creator', () => {
    axios.get = jest.fn().mockReturnValue(Promise.resolve({
      data: {
        commentCount: '0'
      }
    }));
    const expected = {
      type: GET_COMMENT_COUNT,
    };

    return store.dispatch(getUserCommentCount()).then(() => {
      expect(store.getActions()[1].type).toEqual(expected.type);
    });
  });

  it('should get question count action creator', () => {
    axios.get = jest.fn().mockReturnValue(Promise.resolve({
      data: {
        questionCount: '0',
        data: []
      }
    }));
    const expected = {
      type: GET_QUESTION_COUNT,
    };

    return store.dispatch(getUserQuestionCount()).then(() => {
      expect(store.getActions()[2].type).toEqual(expected.type);
    });
  });

  it('should get user upcoming action creator', () => {
    axios.get = jest.fn().mockReturnValue(Promise.resolve({
      data: {
        data: []
      }
    }));
    const expected = [{
      type: GET_UPCOMING_LOADING,
    }, {
      type: GET_UPCOMING_USER_MEETUP
    }];

    return store.dispatch(getUserUpcoming()).then(() => {
      expect(store.getActions()[3].type).toEqual(expected[0].type);
      expect(store.getActions()[4].type).toEqual(expected[1].type);
    });
  });
});
