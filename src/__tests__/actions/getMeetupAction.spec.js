import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { GET_ALL_MEETUPS } from '../../action-types';
import { allMeetups, getMeetups } from '../../actions/meetupActions';
import axios from '../../config/axiosConfig';

const data = [{
  id: '1',
  title: 'this is a test',
  location: 'lagos',
  happeningOn: '',
  tags: ['test']
}];

const middleware = [thunk];
const mockedStore = configureMockStore(middleware);

describe('Get Meetups', () => {
  it('should return all meetups actions object', () => {
    const action = allMeetups();

    expect(action).toEqual({
      type: GET_ALL_MEETUPS,
      payload: [],
    });
  });

  it('should return all meetups actions object with data', () => {
    const action = allMeetups(data);

    expect(action).toEqual({
      type: GET_ALL_MEETUPS,
      payload: data,
    });
  });

  it('should return get meetups action creator type', () => {
    const store = mockedStore({});
    axios.get = jest.fn().mockReturnValue(Promise.resolve({ data }));
    const expected = {
      type: GET_ALL_MEETUPS,
      payload: data
    };

    return store.dispatch(getMeetups())
      .then(() => {
        expect(store.getActions()[0].type).toEqual(expected.type);
      });
  });
});
