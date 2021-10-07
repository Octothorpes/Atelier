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

test('<AddNewQuestion/> calls submit function', () => {
  const addQuestionProps = {
    onCancel: jest.fn(),
    addNewQuestion: jest.fn(),
    productName: 'jeans'
  };
  // axios.post.mockImplementation(() => Promise.resolve(1));
  const event = {target: {name: 'special', value: 'party'}, preventDefault: jest.fn()};
  const wrapper = shallow(<AddNewQuestion {...addQuestionProps}/>);
  wrapper.find('.modal-submit').simulate('click', event);
  expect(event.preventDefault).toHaveBeenCalled();
});