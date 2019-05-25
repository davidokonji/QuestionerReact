import { GET_MEETUP_ID } from '../action-types';

const defaultState = {};

const AdminReducer = (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_MEETUP_ID:
      return {
        ...this.state,
        ...payload
      };

    default:
      return state;
  }
};

export default AdminReducer;
