import {
  GET_ALL_MEETUPS,
  GET_SINGLE_MEETUP,
  MEETUP_NOTFOUND,
  CREATE_MEETUP,
  ERROR_MEETUP,
  DELETE_MEETUP,
  MEETUP_RSVP,
  RSVP_ERROR
} from '../action-types';
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

const createMeetup = (payload = {}) => ({
  type: CREATE_MEETUP,
  payload
});

const meetupError = (message = '') => ({
  type: ERROR_MEETUP,
  message
});

const deleteMeetupHandler = (message = '') => ({
  type: DELETE_MEETUP,
  message
});

const meetupRsvpHandler = (payload = {}, message = '') => ({
  type: MEETUP_RSVP,
  payload,
  message
});

const rsvpError = (message = '') => ({
  type: RSVP_ERROR,
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

const addMeetup = data => async (dispatch) => {
  try {
    const formData = new FormData();

    Object.keys(data).forEach(key => formData.append(key, data[key]));

    const res = await axios.post('/meetups', formData, {
      'Content-Type': 'multipart/form-data',
    });
    return dispatch(createMeetup(res.data.data[0]));
  } catch (error) {
    return dispatch(meetupError(error.message));
  }
};

const deleteMeetup = data => async (dispatch) => {
  try {
    const res = await axios.delete(`meetups/${data}`);
    return dispatch(deleteMeetup(res.data.data));
  } catch (error) {
    return dispatch(meetupError(error.message));
  }
};

const meetupRsvp = (id, data) => async (dispatch) => {
  try {
    const res = await axios.post(`/meetups/${id}/rsvps`, data);

    return dispatch(meetupRsvpHandler(res.data.data[0], 'Thanks for the response'));
  } catch (error) {
    return dispatch(rsvpError('Thanks, Response already taken'));
  }
};

export {
  allMeetups,
  getMeetups,
  singleMeetup,
  meetupNotFound,
  getOneMeetup,
  createMeetup,
  addMeetup,
  meetupError,
  deleteMeetupHandler,
  deleteMeetup,
  meetupRsvp,
  meetupRsvpHandler,
  rsvpError
};
