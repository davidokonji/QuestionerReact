import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {
  GET_ALL_MEETUPS,
  GET_SINGLE_MEETUP,
  MEETUP_NOTFOUND,
  CREATE_MEETUP,
  ERROR_MEETUP,
  DELETE_MEETUP,
  MEETUP_RSVP,
  RSVP_ERROR
} from '../../action-types';
import {
  allMeetups,
  getMeetups,
  singleMeetup,
  meetupNotFound,
  getOneMeetup,
  addMeetup,
  meetupError,
  deleteMeetupHandler,
  deleteMeetup,
  createMeetup,
  meetupRsvp,
  meetupRsvpHandler,
  rsvpError
} from '../../actions/meetupActions';
import axios from '../../config/axiosConfig';

const data = [{
  // id: '1',
  topic: 'this is a test',
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

  it('should return create meetup empty object ', () => {
    const action = createMeetup();

    expect(action).toEqual({
      type: CREATE_MEETUP,
      payload: {}
    });
  });

  it('should return create meetup object ', () => {
    const action = createMeetup(data[0]);

    expect(action).toEqual({
      type: CREATE_MEETUP,
      payload: data[0]
    });
  });

  it('should return meetup Error object', () => {
    const action = meetupError();

    expect(action).toEqual({
      type: ERROR_MEETUP,
      message: ''
    });
  });

  it('should return meetup Error object', () => {
    const action = meetupError('error in meetup');

    expect(action).toEqual({
      type: ERROR_MEETUP,
      message: 'error in meetup'
    });
  });

  it('should return delete handler empty object', () => {
    const action = deleteMeetupHandler();

    expect(action).toEqual({
      type: DELETE_MEETUP,
      message: ''
    });
  });

  it('should return delete handler object', () => {
    const action = deleteMeetupHandler('error deleting');

    expect(action).toEqual({
      type: DELETE_MEETUP,
      message: 'error deleting'
    });
  });

  it('should return create meetup action creator', () => {
    const store = mockedStore({});
    axios.post = jest.fn().mockReturnValue(Promise.resolve({ meetup }));
    const expected = {
      type: CREATE_MEETUP,
    };

    return store.dispatch(addMeetup(data)).then(() => {
      store.getActions();
      // expect(store.getActions()[0].type).toEqual(expected.type);
    });
  });

  it('should return delete meetup action creator', () => {
    const store = mockedStore({});
    axios.delete = jest.fn().mockReturnValue(Promise.resolve({ meetup }));
    const expected = {
      type: DELETE_MEETUP,
    };

    return store.dispatch(deleteMeetup('1')).then(() => {
      store.getActions();
      // expect(store.getActions()[0].type).toEqual(expected.type);
    });
  });

  it('should return rsvp handler empty object', () => {
    const action = meetupRsvpHandler();

    expect(action).toEqual({
      type: MEETUP_RSVP,
      payload: {},
      message: ''
    });
  });

  it('should return rsvp handler', () => {
    const action = meetupRsvpHandler({}, 'successfull');

    expect(action).toEqual({
      type: MEETUP_RSVP,
      payload: {},
      message: 'successfull'
    });
  });

  it('should return rsvp error object', () => {
    const action = rsvpError('error rsvp');

    expect(action).toEqual({
      type: RSVP_ERROR,
      message: 'error rsvp'
    });
  });

  it('should return rsvp error object', () => {
    const action = rsvpError();

    expect(action).toEqual({
      type: RSVP_ERROR,
      message: ''
    });
  });
});
