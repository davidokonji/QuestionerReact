import {
  USER_LOGIN,
  USER_REGISTER,
  AUTHENTICATION_ERROR,
  AUTHENTICATION_SUCCESS
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

const loginReducer = (state = defaultUserState, action) => {
  const { type } = action;

  switch (type) {
    case USER_LOGIN:
      return {
        ...state,
        ...action.user,
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

const RegisterReducer = (state = defaultUserState, action) => {
  const { type } = action;

  switch (type) {
    case USER_REGISTER:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};
export {
  loginReducer,
  RegisterReducer
};
