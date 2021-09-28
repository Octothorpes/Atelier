import React from 'react';
import { shallow } from 'enzyme';
import {Question} from './Question.jsx';
import axios from 'axios';
jest.mock('axios');


const questionsProps = {
  key: 1,
  question: {
    // question_id: 'This is a question'
    question_id: 37,
    question_body: 'Why is this product cheaper here than other sites?',
    question_date: '2018-10-18T00:00:00.000Z',
    asker_name: 'williamsmith',
    question_helpfulness: 4,
    reported: false,
    answers: {
      68: {
        id: 68,
        body: 'We are selling it here without any markup from the middleman!',
        date: '2018-08-18T00:00:00.000Z',
        answerer_name: 'Seller',
        helpfulness: 4,
        photos: []

      }
    }

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
  const wrapper = shallow(<Question {...questionsProps}/>, {disableLifecycleMethods: true});
  expect(wrapper.find('.question-header')).toHaveLength(1);
});

test('<Questions /> renders question info properly', () => {
  const wrapper = shallow(<Question {...questionsProps}/>, {disableLifecycleMethods: true});
  expect(wrapper.find('.question-info').children()).toHaveLength(3);
});
