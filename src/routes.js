import React from 'react';
import { Route,IndexRoute } from 'react-router';
import App from './components/app';
import AboutPage from './components/about/aboutPage';
import HomePage from './components/home/homePage';
import CoursesPage from './components/course/coursesPage';
import ManageCoursePage from './components/course/manageCoursePage'; //eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="courses" component={CoursesPage} />
    <Route path="about" component={AboutPage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />

  </Route>
);
