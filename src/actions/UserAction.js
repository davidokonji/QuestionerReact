import {
  USER_LOGIN,
  USER_REGISTER,
  AUTHENTICATION_ERROR,
  AUTHENTICATION_SUCCESS,
  USER_LOGOUT,
  CLEAR_AUTH_ERROR
} from '../action-types';
import axios from '../config/axiosConfig';

const LoginUser = ({
  id = '', firstname = '', lastname = '', username = '', email = '', isAdmin = false, token = ''
} = {}) => ({
  type: USER_LOGIN,
  user: {
    id,
    firstname,
    lastname,
    username,
    email,
    isAdmin,
    token
  },
});

const RegisterUser = (payload = {}) => ({
  type: USER_REGISTER,
  payload
});

const authFailure = (message = '') => ({
  type: AUTHENTICATION_ERROR,
  message
});

const authSuccess = (message = '') => ({
  type: AUTHENTICATION_SUCCESS,
  message
});

const clearError = () => ({
  type: CLEAR_AUTH_ERROR
});

const logoutHandler = () => ({
  type: USER_LOGOUT,
});

const LoginAction = data => async (dispatch) => {
  try {
    const res = await axios.post('/auth/login', data);
    localStorage.setItem('token', res.data.data[0].token);
    dispatch(LoginUser({
      id: res.data.data[0].user.id,
      firstname: res.data.data[0].user.firstname,
      lastname: res.data.data[0].user.lastname,
      username: res.data.data[0].user.username,
      email: res.data.data[0].user.email,
      isAdmin: res.data.data[0].user.isadmin,
      token: res.data.data[0].token
    }));
    return dispatch(authSuccess(`Welcome back ${res.data.data[0].user.username}`));
  } catch (error) {
    return dispatch(authFailure('invalid credentials' || error.response.data.message));
  }
};

const RegisterAction = data => async (dispatch) => {
  try {
    const res = await axios.post('/auth/signup', data);
    localStorage.setItem('token', res.data.token);
    dispatch(RegisterUser({
      id: res.data.data[0].user.id,
      firstname: res.data.data[0].user.firstname,
      lastname: res.data.data[0].user.lastname,
      username: res.data.data[0].user.username,
      email: res.data.data[0].user.email,
      isAdmin: res.data.data[0].user.isadmin
    }));
    return dispatch(authSuccess(`Thank you for registering ${res.data.data[0].user.username}`));
  } catch (error) {
    return dispatch(authFailure('incorrect credentials' || error.response.data.message));
  }
};

const logoutUser = () => async (dispatch) => {
  window.localStorage.removeItem('token');
  await dispatch(logoutHandler());
};

const clear = () => async (dispatch) => {
  await dispatch(clearError());
};

export {
  LoginUser,
  LoginAction,
  RegisterUser,
  RegisterAction,
  authFailure,
  authSuccess,
  logoutUser,
  logoutHandler,
  clearError,
  clear
};
