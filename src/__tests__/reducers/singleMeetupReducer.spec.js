import { getSingleMeetup } from '../../reducers';
import {
  GET_SINGLE_MEETUP,
  MEETUP_NOTFOUND,
  MEETUP_RSVP,
  RSVP_ERROR
} from '../../action-types';

const payload = {
  id: '',
  title: '',
  location: '',
  happeningOn: ''
};
const message = 'meetup not found';

describe('single meetup reducer', () => {
  it('should return default state', () => {
    const reducer = getSingleMeetup(undefined, { type: '@@INIT' });

    expect(reducer).toEqual({});
  });

  it('should return get single meetup object', () => {
    const reducer = getSingleMeetup(undefined, {
      type: GET_SINGLE_MEETUP,
      payload
    });

    expect(reducer).toEqual(payload);
  });

  it('should return get single meetup object', () => {
    const reducer = getSingleMeetup(undefined, {
      type: MEETUP_NOTFOUND,
      message
    });

    expect(reducer).toEqual({
      message
    });
  });

  it('should return rsvp object', () => {
    const reducer = getSingleMeetup(undefined, {
      type: MEETUP_RSVP,
      payload,
      message: 'Thanks for the Rsvp'
    });

    expect(reducer).toEqual({
      rsvp: payload,
      message: 'Thanks for the Rsvp',
      successful: true
    });
  });

  it('should return rsvp error object', () => {
    const reducer = getSingleMeetup(undefined, {
      type: RSVP_ERROR,
      message: 'Thanks already rsvp for meetup'
    });

    expect(reducer).toEqual({
      message: 'Thanks already rsvp for meetup',
      successful: false
    });
  });
});
