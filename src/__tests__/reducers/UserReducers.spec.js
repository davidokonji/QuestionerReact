import { userReducer } from '../../reducers';
import {
  USER_LOGIN,
  USER_REGISTER,
  AUTHENTICATION_ERROR,
  AUTHENTICATION_SUCCESS
} from '../../action-types';
import UserMocks from '../../Fixtures/User.fixture';

describe('User reducers', () => {
  it('should return default reducer', () => {
    const action = {
      type: '@@INIT',
    };

    const state = userReducer(undefined, action);

    expect(state).toEqual({});
  });

  it('should return user login object', () => {
    const action = {
      type: USER_LOGIN,
      user: UserMocks[1],
    };

    const state = userReducer(undefined, action);

    expect(state).toEqual(UserMocks[1]);
  });

  it('should return user registration object', () => {
    const reducer = userReducer(undefined, {
      type: USER_REGISTER,
      payload: UserMocks[1]
    });

    expect(reducer).toEqual(UserMocks[1]);
  });

  it('should return authentication success object', () => {
    const reducer = userReducer(undefined, {
      type: AUTHENTICATION_SUCCESS,
      message: 'success'
    });

    expect(reducer).toEqual({
      message: 'success',
      redirect: true
    });
  });

  it('should return authentication error object', () => {
    const reducer = userReducer(undefined, {
      type: AUTHENTICATION_ERROR,
      message: 'error'
    });

    expect(reducer).toEqual({
      message: 'error',
      redirect: false
    });
  });
});
