import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './courseForm';

function setup(saving) {
  //noinspection JSAnnotator
  let props = {
    course: {}, saving: saving, errors: {},
    onSave: () => {
    },
    onChange: () => {
    }
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<CourseForm {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };

}

describe('Course Form via React Test Util',()=> {
  it('renders form and h1',()=>{
    const { output } = setup();
    expect(output.type).toBe('form');
    let [h1] = output.props.children;
    expect(h1.type).toBe('h1');
  });

  it('save button is labelled "save" when not saving',()=>{
    const { output } = setup(false);
    const submitButton = output.props.children[5];
    expect(submitButton.props.value).toBe('Save');
  });

  it('save button is labelled "saving" when  saving',()=>{
    const { output } = setup(true);
    const submitButton = output.props.children[5];
    expect(submitButton.props.value).toBe('Saving...');
  });
});
