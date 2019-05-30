import { loginReducer } from '../../reducers';
import {
  USER_LOGIN,
  USER_REGISTER,
  AUTHENTICATION_ERROR,
  AUTHENTICATION_SUCCESS,
  USER_LOGOUT,
  CLEAR_AUTH_ERROR
} from '../../action-types';
import UserMocks from '../../Fixtures/User.fixture';

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

describe('User reducers', () => {
  it('should return default reducer', () => {
    const action = {
      type: '@@INIT',
    };

    const state = loginReducer(defaultUserState, action);

    expect(state).toEqual(defaultUserState);
  });

  it('should return user login object', () => {
    const action = {
      type: USER_LOGIN,
      user: UserMocks[0],
    };

    const state = loginReducer(defaultUserState, action);

    expect(state).toEqual(UserMocks[0]);
  });

  it('should return user registration object', () => {
    const reducer = loginReducer(undefined, {
      type: USER_REGISTER,
      payload: UserMocks[0]
    });

    expect(reducer).toEqual(UserMocks[0]);
  });

  it('should return authentication success object', () => {
    const reducer = loginReducer(UserMocks[0], {
      type: AUTHENTICATION_SUCCESS,
      message: 'success'
    });

    expect(reducer).toEqual({
      ...UserMocks[0],
      message: 'success',
      redirect: true
    });
  });

  it('should return authentication error object', () => {
    const reducer = loginReducer(undefined, {
      type: AUTHENTICATION_ERROR,
      message: 'error'
    });

    expect(reducer).toEqual({
      message: 'error',
      redirect: false
    });
  });

  it('should should return user logout object', () => {
    const reducer = loginReducer(defaultUserState, {
      type: USER_LOGOUT,
    });

    expect(reducer).toEqual(defaultUserState);
  });

  it('should should return intial cleared state', () => {
    const reducer = loginReducer(defaultUserState, {
      type: CLEAR_AUTH_ERROR,
    });

    expect(reducer).toEqual({
      message: '',
      redirect: false
    });
  });
});
