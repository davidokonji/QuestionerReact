import UserReducers from '../../reducers/UserReducers';
import UserMocks from '../../Fixtures/User.fixture';

test('should return default reducer', () => {
  const action = {
    type: '@@INIT',
  };

  const state = UserReducers(undefined, action);

  expect(state).toEqual({});
});

test('should return default reducer', () => {
  const action = {
    type: 'USER_LOGIN',
    user: UserMocks[0],
  };

  const state = UserReducers(undefined, action);

  expect(state).toEqual(UserMocks[0]);
});
