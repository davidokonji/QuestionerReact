import { GET_ALL_MEETUPS } from '../../action-types';
import { getMeetups } from '../../reducers';

const data = [{
  id: '1',
  title: 'this is a test',
  location: 'lagos',
  happeningOn: '',
  tags: ['test']
}];

describe('Get meetup reducer', () => {
  it('should return default type', () => {
    const reducer = getMeetups(undefined, { type: '@@INIT' });

    expect(reducer).toEqual([]);
  });

  it('should return get all meetups reducer type', () => {
    const reducer = getMeetups(undefined, {
      type: GET_ALL_MEETUPS,
      payload: data
    });

    expect(reducer).toEqual({ data });
  });
});
