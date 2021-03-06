import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './courseForm';

function setup(saving) {
  const props = {
    course: {}, saving: saving, errors: {},
    onSave: () => {
    },
    onChange: () => {
    }
  };

  return shallow(<CourseForm {...props} />);

}

describe('testing Course Form via Enzyme', () => {
  it('renders form and Hi', () => {
    const wrapper = setup(false);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('Manage Course');
  });

  it('save button is labelled "save" when not saving', () => {
    const wrapper = setup(false);
    expect(wrapper.find('input').props().value).toBe('Save');
  });


  it('save button is labelled "saving" when saving', () => {
    const wrapper = setup(true);
    expect(wrapper.find('input').props().value).toBe('Saving...');
  });
});
