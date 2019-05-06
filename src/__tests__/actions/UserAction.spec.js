import UserLogin from '../../actions/UserAction';

describe('User login action', () => {
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
  test('should return default options when no data sent', () => {
    const action = UserLogin();

    expect(action).toEqual({
      type: 'USER_LOGIN',
      user: {
        id: '',
        firstname: '',
        lastname: '',
        username: '',
        email: '',
      },
    });
  });
});
