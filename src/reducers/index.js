import { combineReducers } from 'redux';
import userReducer from './UserReducers';
import getMeetups from './getMeetups';
import getSingleMeetup from './singleMeetupReducer';

const reducers = combineReducers({
  auth: userReducer,
  meetups: getMeetups,
  meetup: getSingleMeetup
});

export {
  reducers,
  getMeetups,
  userReducer,
  getSingleMeetup
};
