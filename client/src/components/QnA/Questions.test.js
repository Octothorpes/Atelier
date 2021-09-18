import React from 'react';
import { shallow } from 'enzyme';
import Question from './Question.jsx';
import axios from 'axios';
jest.mock('axios');


const questionsProps = {
  key: 1,
  question: {
    question_id: 'This is a question'
  },
  formatBody: () => {
    axios.post.mockResolvedValue({
      data: {
        value: 42
      }
    });
  }
};

test('<Questions /> renders nodes properly', () => {
  const wrapper = shallow(<Question {...questionsProps}/>);
  expect(wrapper.find('.question-header')).toHaveLength(1);
});

test('<Questions /> renders question info properly', () => {
  const wrapper = shallow(<Question {...questionsProps}/>);
  expect(wrapper.find('.question-info').children()).toHaveLength(3);
});
