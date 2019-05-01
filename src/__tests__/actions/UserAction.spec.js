import UserLogin from '../../actions/UserAction';

test('should add user details', () => {
  const action = UserLogin({
    id: '123',
    firstname: 'david',
    lastname: 'okonji',
    username: 'david',
    email: 'david@gmail.com',
  });

  expect(action).toEqual({
    type: 'USER_LOGIN',
    user: {
      id: '123',
      firstname: 'david',
      lastname: 'okonji',
      username: 'david',
      email: 'david@gmail.com',
    },
  });
});
