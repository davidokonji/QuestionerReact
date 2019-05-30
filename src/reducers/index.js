import { combineReducers } from 'redux';
import loginReducer from './UserReducers';
import getMeetups from './getMeetups';
import getSingleMeetup from './singleMeetupReducer';
import createMeetup from './createMeetupReducer';
import questionReducer from './questionReducers';
import profileReducer from './ProfileReducers';

const reducers = combineReducers({
  auth: loginReducer,
  meetups: getMeetups,
  meetup: getSingleMeetup,
  newMeetup: createMeetup,
  question: questionReducer,
  profile: profileReducer
});

export {
  reducers,
  getMeetups,
  loginReducer,
  getSingleMeetup,
  createMeetup,
  questionReducer,
  profileReducer
};
