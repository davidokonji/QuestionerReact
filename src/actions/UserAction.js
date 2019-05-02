const LoginUser = ({
  id = '', firstname = '', lastname = '', username = '', email = '',
} = {}) => ({
  type: 'USER_LOGIN',
  user: {
    id,
    firstname,
    lastname,
    username,
    email,
  },
});

export default LoginUser;
