import ReactDom from 'react-dom';
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel, faUser, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import storeConfig from './store/store.config';
import Route from './routes/App.routes';
import './styles/styles.scss';

library.add(faStroopwafel, faUser, faHeart);

const store = storeConfig();

const app = (
  <Provider store={store}>
    <Route />
  </Provider>
);

ReactDom.render(app, document.getElementById('root'));
