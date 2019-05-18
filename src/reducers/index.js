import { combineReducers } from 'redux';
import userReducer from './UserReducers';
import getMeetups from './getMeetups';

const reducers = combineReducers({
  auth: userReducer,
  meetups: getMeetups
});

export {
  reducers,
  getMeetups,
  userReducer
};
