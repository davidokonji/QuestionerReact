import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {
  QUESTION_ERROR,
  CREATE_QUESTION
} from '../../action-types';
import {
  createQuestion,
  questionErrorHandeler,
  createQuestionHandler
} from '../../actions';
import axios from '../../config/axiosConfig';

const middleware = [thunk];
const mockedStore = configureMockStore(middleware);

const question = {
  id: 1,
  user: 1,
  meetup: 16,
  title: 'this is an example',
  body: 'this is an example body',
  createdon: '2019-05-27T15:07:44.172Z',
  vote: 0
};
const data = [question];
describe('Questions Actions', () => {
  it('should return create question handler empty object', () => {
    const action = createQuestionHandler();

    expect(action).toEqual({
      type: CREATE_QUESTION,
      payload: {}
    });
  });

  it('should return create question handler object', () => {
    const action = createQuestionHandler(question);

    expect(action).toEqual({
      type: CREATE_QUESTION,
      payload: question
    });
  });

  it('should return error question handler object', () => {
    const action = questionErrorHandeler('error in question');

    expect(action).toEqual({
      type: QUESTION_ERROR,
      message: 'error in question'
    });
  });

  it('should return created question object', () => {
    const store = mockedStore({});
    axios.post = jest.fn().mockReturnValue(Promise.resolve({ data: { data } }));
    const expected = {
      type: CREATE_QUESTION,
    };

    return store.dispatch(createQuestion('16')).then(() => {
      expect(store.getActions()[0].type).toEqual(expected.type);
    });
  });

  it('should return created question object', () => {
    const store = mockedStore({});
    axios.post = jest.fn().mockReturnValue(Promise.resolve({ }));
    const expected = {
      type: QUESTION_ERROR,
    };

    return store.dispatch(createQuestion('16')).then(() => {
      expect(store.getActions()[0].type).toEqual(expected.type);
    });
  });
});
