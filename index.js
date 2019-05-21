import ReactDom from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import storeConfig from './src/store/store.config';
import Route from './src/routes/App.routes';
import './src/styles/styles.scss';

const store = storeConfig();

const app = (
  <Provider store={store}>
    <Route />
  </Provider>
);

ReactDom.render(app, document.getElementById('root'));
