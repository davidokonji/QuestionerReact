import { createStore, combineReducers } from 'redux';
import UserReducers from '../reducers/UserReducers';

export default () => {
  const store = createStore(
    combineReducers({
      user: UserReducers,
    }),
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  return store;
};
