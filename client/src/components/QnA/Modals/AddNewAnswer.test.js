import React from 'react';
import { shallow } from 'enzyme';
import AddNewAnswer from './AddNewAnswer.jsx';

test('<AddNewAnswer/> has answer modal', () => {
  const wrapper = shallow(<AddNewAnswer />);
  expect(wrapper.find('.answer-modal')).toHaveLength(1);
});

test('<AddNewAnswer/> renders title', () => {
  const wrapper = shallow(<AddNewAnswer />);
  expect(wrapper.find('.answer-modal-header-title').children()).toHaveLength(2);
});

test('<AddNewAnswer/> has close button', () => {
  const wrapper = shallow(<AddNewAnswer />);
  expect(wrapper.find('.answer-modal-header-cross').children()).toHaveLength(1);
});

test('<AddNewAnswer/> has main body', () => {
  const wrapper = shallow(<AddNewAnswer />);
  expect(wrapper.find('.answer-modal-main-body')).toHaveLength(1);
});