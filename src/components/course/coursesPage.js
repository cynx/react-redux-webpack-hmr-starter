import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends Component {
  constructor(props,context){
    super(props,context);

    this.state = {
      course: {title:""}
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.courseRow = this.courseRow.bind(this);

  }

  onTitleChange(event){
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course});
  }

  onClickSave(){
    this.props.actions.createCourse(this.state.course);
  }

  courseRow(course,index){
    return <div key={index}>{course.title}</div>;
  }

  render(){
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input type="text" onChange={this.onTitleChange} value={this.state.course.title} />
        <input type="submit" onClick={this.onClickSave} value="Save" />
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
