import { GET_ALL_MEETUPS, GET_SINGLE_MEETUP, MEETUP_NOTFOUND } from '../action-types';
import axios from '../config/axiosConfig';

const allMeetups = (data = []) => ({
  type: GET_ALL_MEETUPS,
  payload: data,
});

const singleMeetup = (payload = {}) => ({
  type: GET_SINGLE_MEETUP,
  payload
});

const meetupNotFound = (message = '') => ({
  type: MEETUP_NOTFOUND,
  message
});

const getOneMeetup = id => async (dispatch) => {
  try {
    const res = await axios.get(`meetups/${id}`);
    return dispatch(singleMeetup(res.data.data[0]));
  } catch (error) {
    return dispatch(meetupNotFound(error.message));
  }
};

const getMeetups = () => async (dispatch) => {
  const res = await axios.get('/meetups');

  return dispatch(allMeetups(res.data.data));
};

export {
  allMeetups,
  getMeetups,
  singleMeetup,
  meetupNotFound,
  getOneMeetup
};
