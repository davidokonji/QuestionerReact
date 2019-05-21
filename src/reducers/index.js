import { combineReducers } from 'redux';
import { loginReducer, RegisterReducer } from './UserReducers';
import getMeetups from './getMeetups';
import getSingleMeetup from './singleMeetupReducer';

const reducers = combineReducers({
  auth: loginReducer,
  register: RegisterReducer,
  meetups: getMeetups,
  meetup: getSingleMeetup
});

export {
  reducers,
  getMeetups,
  loginReducer,
  RegisterReducer,
  getSingleMeetup
};
