import { CREATE_QUESTION, QUESTION_ERROR } from '../../action-types';
import { questionReducer } from '../../reducers';

describe('Question reducer', () => {
  it('should return default state', () => {
    const reducer = questionReducer(undefined, { type: '@@INIT' });

    expect(reducer).toEqual({});
  });

  it('should return create question object', () => {
    const reducer = questionReducer(undefined, {
      type: CREATE_QUESTION,
      payload: {}
    });

    expect(reducer).toEqual({});
  });

  it('should return create question object', () => {
    const reducer = questionReducer(undefined, {
      type: QUESTION_ERROR,
      message: 'question error'
    });

    expect(reducer).toEqual({ message: 'question error' });
  });
});
