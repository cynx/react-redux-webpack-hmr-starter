import React from 'react';
import { Route,IndexRoute } from 'react-router';
import App from './components/app';
import AboutPage from './components/about/aboutPage';
import HomePage from './components/home/homePage';
import CoursesPage from './components/course/coursesPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="courses" component={CoursesPage} />
    <Route path="about" component={AboutPage} />
  </Route>
);