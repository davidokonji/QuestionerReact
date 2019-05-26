import {
  GET_ALL_MEETUPS,
  GET_SINGLE_MEETUP,
  MEETUP_NOTFOUND,
  CREATE_MEETUP,
  ERROR_MEETUP
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

const meetupCreationError = (message = {}) => ({
  type: ERROR_MEETUP,
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
    return dispatch(meetupCreationError(error.message));
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
  meetupCreationError
};
