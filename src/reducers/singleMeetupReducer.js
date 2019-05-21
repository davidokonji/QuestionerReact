import { GET_SINGLE_MEETUP, MEETUP_NOTFOUND } from '../action-types';

const defaultState = {};

const getSingleMeetup = (state = defaultState, action) => {
  const { type } = action;

  switch (type) {
    case GET_SINGLE_MEETUP:
      return {
        ...state,
        ...action.payload
      };
    case MEETUP_NOTFOUND:
      return {
        message: action.message
      };

    default:
      return state;
  }
};

export default getSingleMeetup;
