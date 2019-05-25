import { GET_MEETUP_ID } from '../action-types';

const getMeetupById = (payload = {}) => ({
  type: GET_MEETUP_ID,
  payload
});

const getMeetupAction = payload => (dispatch) => {
  dispatch(getMeetupById);
};

export {
  getMeetupById,
  getMeetupAction
};
