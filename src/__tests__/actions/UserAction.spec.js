import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from '../../config/axiosConfig';
import {
  LoginUser,
  RegisterUser,
  RegisterAction,
  authFailure,
  authSuccess,
  LoginAction,
  logoutUser,
  clear,
  clearError
} from '../../actions';

import {
  USER_LOGIN,
  USER_REGISTER,
  AUTHENTICATION_ERROR,
  AUTHENTICATION_SUCCESS,
  USER_LOGOUT,
  CLEAR_AUTH_ERROR
} from '../../action-types';

const userData = {
  id: '123',
  firstname: 'david',
  lastname: 'okonji',
  username: 'david',
  email: 'david@gmail.com',
};
const Login = {
  email: 'adminuser@gmail.com',
  password: 'password'
};

const errorlogin = {
  email: 'davidokonjigmail.com',
  password: 'password'
};

const Register = {
  firstname: 'david',
  lastname: 'okonji',
  othername: 'devl',
  username: 'davidsdkbsdj',
  email: 'daviddihsoidhsd@gmail.com',
  password: 'password1234',
  phonenumber: '08109991112',
  isadmin: false
};
const data = [Register];

const message = {
  message: 'message test',
  statusMessage: 'status code test'
};

const middleware = [thunk];
const mockedStore = configureMockStore(middleware);

describe('User login action', () => {
  it('should add user details', () => {
    const action = LoginUser(userData);

    expect(action).toEqual({
      type: USER_LOGIN,
      user: {
        id: '123',
        firstname: 'david',
        lastname: 'okonji',
        username: 'david',
        email: 'david@gmail.com',
        isAdmin: false,
        token: ''
      },
    });
  });
  it('should return default options when no data sent', () => {
    const action = LoginUser();

    expect(action).toEqual({
      type: USER_LOGIN,
      user: {
        id: '',
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        isAdmin: false,
        token: ''
      },
    });
  });

  it('should return Login action creator object', () => {
    const store = mockedStore({});
    axios.get = jest.fn().mockReturnValue(Promise.resolve({ Login }));
    const expected = [USER_LOGIN];

    return store.dispatch(LoginAction(Login))
      .then(() => {
        expect(store.getActions()[0].type).toEqual(expected[0]);
      });
  });

  it('should return Login action creator error object', () => {
    const store = mockedStore({});
    axios.post = jest.fn().mockReturnValue(Promise.resolve({ error: { response: { data: { message } } } }));
    const expected = [AUTHENTICATION_ERROR];

    return store.dispatch(LoginAction(errorlogin))
      .then(() => {
        expect(store.getActions()[0].type).toEqual(expected[0]);
      });
  });
});

describe('Registration Actions', () => {
  it('should return register user action', () => {
    const action = RegisterUser(userData);

    expect(action).toEqual({
      type: USER_REGISTER,
      payload: userData
    });
  });

  it('should return register user action empty object', () => {
    const action = RegisterUser();

    expect(action).toEqual({
      type: USER_REGISTER,
      payload: {}
    });
  });

  it('should return registration action creator object', () => {
    const store = mockedStore({});
    axios.post = jest.fn().mockReturnValue(Promise.resolve({ data: { data } }));
    const expected = [USER_REGISTER];

    return store.dispatch(RegisterAction(Register))
      .then(() => store.getActions());
  });

  it('should return registration action creator error object', () => {
    const store = mockedStore({});
    axios.post = jest.fn().mockReturnValue(Promise.resolve({ data: { message } }));
    const expected = [AUTHENTICATION_ERROR];

    return store.dispatch(RegisterAction(Register))
      .then(() => {
        expect(store.getActions()[0].type).toEqual(expected[0]);
      });
  });
});

describe('Authentication Actions', () => {
  it('should return success object', () => {
    const action = authSuccess(message.message);

    expect(action).toEqual({
      type: AUTHENTICATION_SUCCESS,
      message: message.message
    });
  });
  it('should return success object', () => {
    const action = authSuccess();

    expect(action).toEqual({
      type: AUTHENTICATION_SUCCESS,
      message: ''
    });
  });

  it('should return error object', () => {
    const action = authFailure(message.message);

    expect(action).toEqual({
      type: AUTHENTICATION_ERROR,
      message: message.message
    });
  });
  it('should return error object', () => {
    const action = authFailure();

    expect(action).toEqual({
      type: AUTHENTICATION_ERROR,
      message: ''
    });
  });

  it('should return logout user action creator', () => {
    const store = mockedStore({});

    return store.dispatch(logoutUser())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual(USER_LOGOUT);
      });
  });

  it('should return clear', () => {
    const store = mockedStore({});

    return store.dispatch(clear())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual(CLEAR_AUTH_ERROR);
      });
  });
});
