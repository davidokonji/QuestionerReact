import { CREATE_MEETUP, ERROR_MEETUP } from '../../action-types';
import { createMeetup } from '../../reducers';

const newMeetup = {
  topic: 'this is a test meetup',
  location: 'lagos, nigeria',
  happeningOn: new Date(),
  tags: 'technology'
};

describe('Create Meetup Reducers', () => {
  it('should return default state', () => {
    const reducer = createMeetup(undefined, { type: '@@INIT' });

    expect(reducer).toEqual({});
  });

  it('should return create meetup object', () => {
    const reducer = createMeetup(undefined, {
      type: CREATE_MEETUP,
      payload: newMeetup
    });

    expect(reducer).toEqual(newMeetup);
  });

  it('should return create meetup object', () => {
    const reducer = createMeetup(undefined, {
      type: ERROR_MEETUP,
      message: 'error creating meetup'
    });

    expect(reducer).toEqual({ message: 'error creating meetup' });
  });
});
