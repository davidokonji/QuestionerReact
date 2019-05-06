import { GET_ALL_MEETUPS } from '../action-types';

const defaultState = [];

const getMeetups = (state = defaultState, action) => {
  const { type } = action;

  switch (type) {
    case GET_ALL_MEETUPS:
      return {
        ...state,
        data: action.payload
      };

    default:
      return state;
  }
};

export default getMeetups;
