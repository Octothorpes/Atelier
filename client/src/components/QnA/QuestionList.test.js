import React from 'react';
import { shallow } from 'enzyme';
import QuestionList from './QuestionsList.jsx';
import MoreQuestionsNAnswers from './MoreQuestionsNAnswers.jsx';

const questionListProps = {
  formatBody: jest.fn((a, b, c) => {})
};

test('<QuestionList /> renders properly', () => {
  const wrapper = shallow(<QuestionList {...questionListProps}/>);
  expect(wrapper.find('.questions-list')).toHaveLength(1);
});

test('<QuestionList /> contains MoreQuestionsNAnswers button', () => {
  const wrapper = shallow(<QuestionList {...questionListProps}/>);
  expect(wrapper.find('div')).toHaveLength(2);
});

test('<QuestionList /> has called the formatBody function', () => {
  const wrapper = shallow(<QuestionList {...questionListProps}/>);
  expect(questionListProps.formatBody.mock.calls.length).toBe(3);
});