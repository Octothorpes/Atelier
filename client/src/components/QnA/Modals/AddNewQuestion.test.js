import React from 'react';
import { shallow } from 'enzyme';
import AddNewQuestion from './AddNewQuestion.jsx';

test('<AddNewQuestion/> has modal header', () => {
  const wrapper = shallow(<AddNewQuestion />);
  expect(wrapper.find('.modal-header')).toHaveLength(1);
});

test('<AddNewQuestion/> header has 2 children', () => {
  const wrapper = shallow(<AddNewQuestion />);
  expect(wrapper.find('.modal-header').children()).toHaveLength(2);
});

test('<AddNewQuestion/> has a main body', () => {
  const wrapper = shallow(<AddNewQuestion />);
  expect(wrapper.find('.modal-body')).toHaveLength(1);
});

test('<AddNewQuestion/> has modal info', () => {
  const wrapper = shallow(<AddNewQuestion />);
  expect(wrapper.find('.modal-info').children()).toHaveLength(4);
});