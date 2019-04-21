import ReactDom from 'react-dom';
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel, faUser, faHeart } from '@fortawesome/free-solid-svg-icons';
import 'normalize.css/normalize.css';
import Route from './routes/App.routes';
import './styles/styles.scss';

library.add(faStroopwafel, faUser, faHeart);


ReactDom.render(<Route />, document.getElementById('root'));
