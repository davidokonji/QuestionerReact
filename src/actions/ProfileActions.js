import {
  GET_SINGLE_USER,
  GET_UPCOMING_USER_MEETUP,
  GET_QUESTION_COUNT,
  GET_COMMENT_COUNT,
  GET_UPCOMING_LOADING,
  NO_UPCOMING_MEETUP
} from '../action-types';
import axios from '../config/axiosConfig';

const getSingleUserHandler = payload => ({
  type: GET_SINGLE_USER,
  payload
});

const getUpcomingLoading = () => ({
  type: GET_UPCOMING_LOADING
});

const getUserUpcomingHandler = payload => ({
  type: GET_UPCOMING_USER_MEETUP,
  payload
});

const noUpcomingMeetup = (message, status) => ({
  type: NO_UPCOMING_MEETUP,
  message,
  status
});

const getUserCommentCountHandler = count => ({
  type: GET_COMMENT_COUNT,
  count
});

const getUserQuestionCountHandler = (count, payload) => ({
  type: GET_QUESTION_COUNT,
  count,
  payload
});

const getSingleUser = () => async (dispatch) => {
  const res = await axios.get('/user');

  return dispatch(getSingleUserHandler(res.data.data[0]));
};

const getUserCommentCount = () => async (dispatch) => {
  const res = await axios.get('/user/questions/comments');

  return dispatch(getUserCommentCountHandler(res.data.commentCount));
};

const getUserQuestionCount = () => async (dispatch) => {
  const res = await axios.get('/user/questions');

  return dispatch(getUserQuestionCountHandler(res.data.questionCount, res.data.data));
};

const getUserUpcoming = () => async (dispatch) => {
  try {
    dispatch(getUpcomingLoading());

    const res = await axios.get('/user/upcomingmeetups');

    return dispatch(getUserUpcomingHandler(res.data.data));
  } catch (error) {
    return dispatch(noUpcomingMeetup(error.response.data.message, error.response.status));
  }
};

export {
  getSingleUserHandler,
  getUpcomingLoading,
  getUserUpcomingHandler,
  getUserCommentCountHandler,
  getUserQuestionCountHandler,
  getSingleUser,
  getUserCommentCount,
  getUserQuestionCount,
  getUserUpcoming,
  noUpcomingMeetup
};
