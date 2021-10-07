import React from 'react';
import { shallow } from 'enzyme';
import AddNewAnswer from './AddNewAnswer.jsx';
import axios from 'axios';
jest.mock('axios');

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

test('<AddNewAnswer/> has modal Cancel button', () => {
  const addAnswerProps = {
    onCancel: jest.fn(),
    addNewAnswer: jest.fn(),
    productName: 'shoe',
    questionBody: 'this is question body'
  };
  const wrapper = shallow(<AddNewAnswer {...addAnswerProps}/>);
  wrapper.find('.answer-modal-cancel').simulate('click');
  expect(addAnswerProps.onCancel).toHaveBeenCalled();
});

test('<AddNewAnswer/> calls submit function', () => {
  const addAnswerProps = {
    onCancel: jest.fn(),
    addNewAnswer: jest.fn(),
    productName: 'shoe',
    questionBody: 'this is question body'
  };
  axios.post.mockImplementation(() => Promise.resolve(1));
  const wrapper = shallow(<AddNewAnswer {...addAnswerProps}/>);
  wrapper.find('.answer-modal-submit').simulate('click');
  expect(axios.post).toHaveBeenCalled();
});

test('<AddNewAnswer/> has upload photos', () => {
  const addAnswerProps = {
    onCancel: jest.fn(),
    addNewAnswer: jest.fn(),
    productName: 'shoe',
    questionBody: 'this is question body'
  };
  const wrapper = shallow(<AddNewAnswer {...addAnswerProps}/>);
  expect(wrapper.find('.answer-modal-upload-photos')).toHaveLength(1);
});

test('<AddNewAnswer/> calls onChange for answer', () => {
  const addAnswerProps = {
    onCancel: jest.fn(),
    addNewAnswer: jest.fn(),
    productName: 'shoe',
    questionBody: 'this is question body'
  };
  const onChangeHandler = jest.spyOn(AddNewAnswer.prototype, 'changeHandler');
  const wrapper = shallow(<AddNewAnswer {...addAnswerProps}/>);
  const event = {target: {name: 'special', value: 'party'}};
  const instance = wrapper.instance();
  wrapper.find('.answer-modal-textarea').simulate('change', event);
  expect(onChangeHandler).toHaveBeenCalled();
});