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
  logoutUser
} from '../../actions';

import {
  USER_LOGIN,
  USER_REGISTER,
  AUTHENTICATION_ERROR,
  AUTHENTICATION_SUCCESS,
  USER_LOGOUT
} from '../../action-types';

const userData = {
  id: '123',
  firstname: 'david',
  lastname: 'okonji',
  username: 'david',
  email: 'david@gmail.com',
};
const Login = {
  email: 'davidokonji3@gmail.com',
  password: 'password'
};

const errorlogin = {
  email: 'davidokonjigmail.com',
  password: 'password'
};

const Register = {
  id: '1',
  firstname: 'david',
  lastname: 'okonji',
  othername: 'devl',
  username: 'davidsdkbsdj',
  email: 'daviddihsoidhsd@gmail.com',
  password: 'password1234',
  phonenumber: '08109991112',
  isadmin: false
};

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
    axios.get = jest.fn().mockReturnValue(Promise.resolve({ errorlogin }));
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

  // it('should return registration action creator error object', () => {
  //   const store = mockedStore({});
  //   axios.post = jest.fn().mockReturnValue(Promise.resolve({ Register }));
  //   const expected = [USER_REGISTER];

  //   return store.dispatch(RegisterAction(Register))
  //     .then(() => {
  //       console.log(store.getActions());
  //       expect(store.getActions()[0].type).toEqual(expected[0]);
  //     });
  // });

  it('should return registration action creator error object', () => {
    const store = mockedStore({});
    axios.post = jest.fn().mockReturnValue(Promise.reject({ Register }));
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
});
