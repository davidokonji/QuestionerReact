import {
  USER_LOGIN,
  USER_REGISTER,
  AUTHENTICATION_ERROR,
  AUTHENTICATION_SUCCESS
} from '../action-types';

const defaultUserState = {};

const UserReducer = (state = defaultUserState, action) => {
  const { type } = action;

  switch (type) {
    case USER_LOGIN:
      return {
        ...state,
        ...action.user,
      };
    case USER_REGISTER:
      return {
        ...state,
        ...action.payload
      };
    case AUTHENTICATION_SUCCESS:
      return {
        ...state,
        message: action.message,
        redirect: true
      };
    case AUTHENTICATION_ERROR:
      return {
        message: action.message,
        redirect: false
      };

    default:
      return state;
  }
};

export default UserReducer;
