import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom'; //if imported ReactDOM, then have to use ReactDOM.render
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux'; //HOC
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';

const store = configureStore(); //if I pass initial state here, it overrides the initial state param in reducer
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  ,document.getElementById('app')
);
