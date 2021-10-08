import React from 'react';
import { shallow } from 'enzyme';
import Answer from './Answer.jsx';
import axios from 'axios';
jest.mock('axios');

const answerProps = {
  key: 1,
  answer: {
    answer_id: 3,
    photos: []
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

test('<Answer /> calls yesHandler', () => {
  const answerProps = {
    key: 1,
    answer: {

      "answer_id": 5,
      "body": "Something pretty durable but I can't be sure",
      "date": "2018-01-04T00:00:00.000Z",
      "answerer_name": "metslover",
      "helpfulness": 5,
      "photos": [{
        "id": 1,
        "url": "urlplaceholder/answer_5_photo_number_1.jpg"
      },
      {
        "id": 2,
        "url": "urlplaceholder/answer_5_photo_number_2.jpg"
      },
      // ...
      ]

    },
    formatBody: jest.fn(() => 1),
    productName: 'shoe',
    sendInteraction: jest.fn(() => 2)
  };
  axios.put.mockImplementation(() => Promise.resolve(1));
  const wrapper = shallow(<Answer {...answerProps}/>);
  wrapper.find('.answer-yes').simulate('click');
  expect(answerProps.formatBody).toHaveBeenCalled();
});

test('<Answer /> renders images', () => {
  const answerProps = {
    key: 1,
    answer: {

      "answer_id": 5,
      "body": "Something pretty durable but I can't be sure",
      "date": "2018-01-04T00:00:00.000Z",
      "answerer_name": "metslover",
      "helpfulness": 5,
      "photos": [{
        "id": 1,
        "url": "urlplaceholder/answer_5_photo_number_1.jpg"
      },
      {
        "id": 2,
        "url": "urlplaceholder/answer_5_photo_number_2.jpg"
      },
      // ...
      ]

    },
    formatBody: jest.fn(() => 1),
    productName: 'shoe',
    sendInteraction: jest.fn(() => 2)
  };
  const wrapper = shallow(<Answer {...answerProps} />);
  expect(wrapper.find('.answer-photos')).toHaveLength(1);
});

test('<Answer /> upload images', () => {
  const answerProps = {
    key: 1,
    answer: {

      "answer_id": 5,
      "body": "Something pretty durable but I can't be sure",
      "date": "2018-01-04T00:00:00.000Z",
      "answerer_name": "metslover",
      "helpfulness": 5,
      "photos": [{
        "id": 1,
        "url": "urlplaceholder/answer_5_photo_number_1.jpg"
      },
      {
        "id": 2,
        "url": "urlplaceholder/answer_5_photo_number_2.jpg"
      },
      // ...
      ]

    },
    formatBody: jest.fn(() => 1),
    productName: 'shoe',
    sendInteraction: jest.fn(() => 2)
  };
  const showImageModal = jest.spyOn(Answer.prototype, 'showImageModal');
  const wrapper = shallow(<Answer {...answerProps} />);
  const instance = wrapper.instance();
  wrapper.find('.answer-img').at(0).simulate('click');
  expect(showImageModal).toHaveBeenCalled();
});
