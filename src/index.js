import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom'; //if imported ReactDOM, then have to use ReactDOM.render
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render (
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
