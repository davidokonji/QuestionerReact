import getMeetups from './getMeetups';
import userAction from './userAction';

const {
  USER_LOGIN,
  USER_REGISTER,
  AUTHENTICATION_ERROR,
  AUTHENTICATION_SUCCESS
} = userAction;
const { GET_ALL_MEETUPS } = getMeetups;

export {
  USER_LOGIN,
  USER_REGISTER,
  GET_ALL_MEETUPS,
  AUTHENTICATION_ERROR,
  AUTHENTICATION_SUCCESS
};
