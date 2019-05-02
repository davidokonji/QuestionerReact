import ReactDom from 'react-dom';
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel, faUser, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import storeConfig from './store/store.config';
import Route from './routes/App.routes';
import './styles/styles.scss';
import LoginUser from './actions/UserAction';

library.add(faStroopwafel, faUser, faHeart);

const store = storeConfig();

store.dispatch(LoginUser({
  id: 1234,
  firstname: 'david',
  lastname: 'okonji',
  username: 'devlen',
  email: 'davidokonji@gmail.com',
}));

console.log(store.getState());

const app = (
  <Provider store={store}>
    <Route />
  </Provider>
);

ReactDom.render(app, document.getElementById('root'));
