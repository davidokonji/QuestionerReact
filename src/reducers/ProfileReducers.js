import {
  GET_SINGLE_USER,
  GET_UPCOMING_USER_MEETUP,
  GET_QUESTION_COUNT,
  GET_COMMENT_COUNT,
  GET_UPCOMING_LOADING,
} from '../action-types';

const defaultState = {};

const ProfileReducer = (state = defaultState, action) => {
  const {
    type,
    payload,
    count
  } = action;

  switch (type) {
    case GET_SINGLE_USER:
      return {
        ...state,
        user: payload
      };
    case GET_UPCOMING_USER_MEETUP:
      return {
        ...state,
        upcoming: payload,
        loading: false
      };
    case GET_UPCOMING_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_QUESTION_COUNT:
      return {
        ...state,
        questions: payload,
        questionCount: count,
      };
    case GET_COMMENT_COUNT:
      return {
        ...state,
        comments: count
      };

    default:
      return state;
  }
};

export default ProfileReducer;
