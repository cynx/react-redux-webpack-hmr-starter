import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './courseList';
import {browserHistory} from 'react-router';

class CoursesPage extends Component {
  constructor(props,context){
    super(props,context);

    this.courseRow = this.courseRow.bind(this);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);

  }


  redirectToAddCoursePage(){
      browserHistory.push('/course');
  }

  courseRow(course,index){
    return <div key={index}>{course.title}</div>;
  }

  render(){

    const {courses} = this.props;

    return (
      <div>
        <h1>Courses</h1>
        <input
          type="submit"
          value="Add Course"
          className="btn btn-primary"
          onClick={this.redirectToAddCoursePage}
        />
        <CourseList courses={courses}/>

      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps){ //access components own props.
  return {
    courses:state.courses
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(courseActions,dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage); //if we dont pass mapPropsToDispatch, dispatch properties is automatically injected in the component
