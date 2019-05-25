import { combineReducers } from 'redux';
import { loginReducer, RegisterReducer } from './UserReducers';
import getMeetups from './getMeetups';
import getSingleMeetup from './singleMeetupReducer';
import getArticleById from './AdminReducers';

const reducers = combineReducers({
  auth: loginReducer,
  register: RegisterReducer,
  meetups: getMeetups,
  meetup: getSingleMeetup,
  meetupId: getArticleById
});

export {
  reducers,
  getMeetups,
  loginReducer,
  RegisterReducer,
  getSingleMeetup
};
