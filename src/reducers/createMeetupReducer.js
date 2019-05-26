import {
  CREATE_MEETUP,
  ERROR_MEETUP
} from '../action-types';

const defaultState = {};

const createMeetup = (state = defaultState, action) => {
  const { type, payload, message } = action;

  switch (type) {
    case CREATE_MEETUP:
      return {
        ...state,
        ...payload
      };
    case ERROR_MEETUP:
      return {
        message
      };
    default:
      return state;
  }
};

export default createMeetup;
