import { loginReducer, RegisterReducer } from '../../reducers';
import {
  USER_LOGIN,
  USER_REGISTER,
  AUTHENTICATION_ERROR,
  AUTHENTICATION_SUCCESS
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
    const reducer = RegisterReducer(undefined, {
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
});
