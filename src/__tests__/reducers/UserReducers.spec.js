import { userReducer } from '../../reducers';
import UserMocks from '../../Fixtures/User.fixture';

test('should return default reducer', () => {
  const action = {
    type: '@@INIT',
  };

  const state = userReducer(undefined, action);

  expect(state).toEqual({});
});

test('should return default reducer', () => {
  const action = {
    type: 'USER_LOGIN',
    user: UserMocks[0],
  };

  const state = userReducer(undefined, action);

  expect(state).toEqual(UserMocks[0]);
});
