import {
  CREATE_QUESTION,
  QUESTION_ERROR
} from '../action-types';

const defaultState = {};

const questionReducer = (state = defaultState, action) => {
  const { type, payload, message } = action;

  switch (type) {
    case CREATE_QUESTION:
      return {
        ...state,
        ...payload
      };
    case QUESTION_ERROR:
      return {
        message
      };

    default:
      return state;
  }
};
export default questionReducer;
