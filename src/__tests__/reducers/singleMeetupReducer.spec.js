import { getSingleMeetup } from '../../reducers';
import { GET_SINGLE_MEETUP, MEETUP_NOTFOUND } from '../../action-types';

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
});
