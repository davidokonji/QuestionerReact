import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { GET_ALL_MEETUPS, GET_SINGLE_MEETUP, MEETUP_NOTFOUND } from '../../action-types';
import {
  allMeetups,
  getMeetups,
  singleMeetup,
  meetupNotFound,
  getOneMeetup
} from '../../actions/meetupActions';
import axios from '../../config/axiosConfig';

const data = [{
  id: '1',
  title: 'this is a test',
  location: 'lagos',
  happeningOn: '',
  tags: ['test']
}];

const meetup = {
  data: {
    data: [{
      id: '1',
      title: 'this is a test',
      location: 'lagos',
      happeningOn: '',
      tags: ['test']
    }]
  }
};

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

  it('should return one meetups actions object with data', () => {
    const action = singleMeetup(data[0]);

    expect(action).toEqual({
      type: GET_SINGLE_MEETUP,
      payload: data[0],
    });
  });

  it('should return meetup not actions object with data', () => {
    const action = meetupNotFound('meetup not found');

    expect(action).toEqual({
      type: MEETUP_NOTFOUND,
      message: 'meetup not found'
    });
  });

  it('should return meetup not actions object without data', () => {
    const action = meetupNotFound();

    expect(action).toEqual({
      type: MEETUP_NOTFOUND,
      message: ''
    });
  });


  it('should return get one meetup action creator type', () => {
    const store = mockedStore({});
    axios.get = jest.fn().mockReturnValue(Promise.resolve({ data: meetup }));
    const expected = {
      type: GET_SINGLE_MEETUP,
    };

    return store.dispatch(getOneMeetup('16')).then(() => {
      expect(store.getActions()[0].type).toEqual(expected.type);
    });
  });

  it('should return get one meetup action creator not found type', () => {
    const store = mockedStore({});
    axios.get = jest.fn().mockReturnValue(Promise.resolve({ data: data[0] }));
    const expected = {
      type: MEETUP_NOTFOUND,
      payload: data[0]
    };

    return store.dispatch(getOneMeetup()).then(() => {
      expect(store.getActions()[0].type).toEqual(expected.type);
    });
  });
});
