const defaultUserState = {};

const UserReducer = (state = defaultUserState, action) => {
  const { type } = action;

  switch (type) {
    case 'USER_LOGIN':
      return {
        ...state,
        ...action.user,
      };

    default:
      return state;
  }
};

export default UserReducer;
