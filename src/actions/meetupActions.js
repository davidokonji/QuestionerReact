import { GET_ALL_MEETUPS } from '../action-types';
import axios from '../config/axiosConfig';

const allMeetups = (data = [], message = '') => ({
  type: GET_ALL_MEETUPS,
  payload: data,
});

const getMeetups = () => async (dispatch) => {
  const res = await axios.get('/meetups');

  return dispatch(allMeetups(res.data.data));
};

export {
  allMeetups,
  getMeetups
};
