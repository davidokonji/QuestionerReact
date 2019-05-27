import {
  GET_SINGLE_MEETUP,
  MEETUP_NOTFOUND,
  MEETUP_RSVP, RSVP_ERROR
} from '../action-types';

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
    case MEETUP_RSVP:
      return {
        ...state,
        rsvp: action.payload,
        message: action.message,
        successful: true
      };
    case RSVP_ERROR:
      return {
        ...state,
        message: action.message,
        successful: false
      };

    default:
      return state;
  }
};

export default getSingleMeetup;
