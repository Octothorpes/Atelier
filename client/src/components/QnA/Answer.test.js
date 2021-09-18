import React from 'react';
import { shallow } from 'enzyme';
import Answer from './Answer.jsx';
import axios from 'axios';
jest.mock('axios');

const answerProps = {
  key: 1,
  answer: {
    answer_id: 3
  },
  formatBody: () => {
    return 41;
  }
};

test('<Answer /> renders answer body', () => {
  axios.post.mockResolvedValue = 54;
  const wrapper = shallow(<Answer {...answerProps} />);
  expect(wrapper.find('.answers-body').children()).toHaveLength(2);
});