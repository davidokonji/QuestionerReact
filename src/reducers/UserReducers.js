import {
  USER_LOGIN,
  USER_REGISTER,
  AUTHENTICATION_ERROR,
  AUTHENTICATION_SUCCESS,
  USER_LOGOUT,
  CLEAR_AUTH_ERROR
} from '../action-types';

const defaultUserState = {
  id: '',
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  isAdmin: false,
  token: '',
  redirect: false
};

const authReducer = (state = defaultUserState, action) => {
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
    case CLEAR_AUTH_ERROR:
      return {
        message: '',
        redirect: false
      };
    case USER_LOGOUT:
      return {
        ...defaultUserState
      };

    default:
      return state;
  }
};

export default authReducer;
