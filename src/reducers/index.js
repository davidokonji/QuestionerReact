import { combineReducers } from 'redux';
import { loginReducer, RegisterReducer } from './UserReducers';
import getMeetups from './getMeetups';
import getSingleMeetup from './singleMeetupReducer';
import createMeetup from './createMeetupReducer';

const reducers = combineReducers({
  auth: loginReducer,
  register: RegisterReducer,
  meetups: getMeetups,
  meetup: getSingleMeetup,
  newMeetup: createMeetup
});

export {
  reducers,
  getMeetups,
  loginReducer,
  RegisterReducer,
  getSingleMeetup,
  createMeetup
};
