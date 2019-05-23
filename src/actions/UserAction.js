import {
  USER_LOGIN,
  USER_REGISTER,
  AUTHENTICATION_ERROR,
  AUTHENTICATION_SUCCESS
} from '../action-types';
import axios from '../config/axiosConfig';

const LoginUser = ({
  id = '', firstname = '', lastname = '', username = '', email = '',
} = {}) => ({
  type: USER_LOGIN,
  user: {
    id,
    firstname,
    lastname,
    username,
    email,
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
    }));
    return dispatch(authSuccess(`Welcome back ${res.data.data[0].user.username}`));
  } catch (error) {
    return dispatch(authFailure(error.message));
  }
};

const RegisterAction = data => async (dispatch) => {
  try {
    const res = await axios.post('/auth/signup', data);
    localStorage.setItem('token', res.data.data[0].token);
    dispatch(RegisterUser({
      id: res.data.data[0].user.id,
      firstname: res.data.data[0].user.firstname,
      lastname: res.data.data[0].user.lastname,
      username: res.data.data[0].user.username,
      email: res.data.data[0].user.email,
    }));
    return dispatch(authSuccess(`Thank you for registering ${res.data.data[0].user.username}`));
  } catch (error) {
    // TODO: put valid error messages here
    return dispatch(authFailure(error.message));
  }
};

export {
  LoginUser,
  LoginAction,
  RegisterUser,
  RegisterAction,
  authFailure,
  authSuccess
};
