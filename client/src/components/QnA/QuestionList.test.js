import React from 'react';
import { shallow } from 'enzyme';
import {QuestionsList} from './QuestionsList.jsx';
import MoreQuestionsNAnswers from './MoreQuestionsNAnswers.jsx';

const questionListProps = {
  formatBody: jest.fn((a, b, c) => {}),
  addNewQuestion: () => 43,
  questionList: []
};

test('<QuestionList /> renders properly', () => {
  const wrapper = shallow(<QuestionsList {...questionListProps}/>);
  expect(wrapper.find('.no-question-button')).toHaveLength(1);
});

const questionListProps1 = {
  formatBody: jest.fn((a, b, c) => {}),
  addNewQuestion: () => 43,
  questionList: ['Jest', 'React', 'Enzyme']
};

test('<QuestionList /> contains MoreQuestionsNAnswers button', () => {
  const wrapper = shallow(<QuestionsList {...questionListProps1}/>);
  expect(wrapper.find('.questions-list')).toHaveLength(1);
});

// test('<QuestionList /> has called the formatBody function', () => {
//   const wrapper = shallow(<QuestionsList {...questionListProps}/>, {disableLifecycleMethods: true});
//   expect(questionListProps.formatBody.mock.calls.length).toBe(3);
// });