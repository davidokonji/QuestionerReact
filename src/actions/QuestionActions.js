import { CREATE_QUESTION, QUESTION_ERROR } from '../action-types';
import axios from '../config/axiosConfig';

const createQuestionHandler = (payload = {}) => ({
  type: CREATE_QUESTION,
  payload
});

const questionErrorHandeler = (message = '') => ({
  type: QUESTION_ERROR,
  message
});

const createQuestion = data => async (dispatch) => {
  try {
    const res = await axios.post('/questions', data);

    return dispatch(createQuestionHandler(res.data.data[0]));
  } catch (error) {
    return dispatch(questionErrorHandeler(error.message));
  }
};

export {
  createQuestionHandler,
  questionErrorHandeler,
  createQuestion
};
