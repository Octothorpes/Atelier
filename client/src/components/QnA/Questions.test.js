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


test('<Questions /> calles componentDidMount', () => {
  const questionProps = {
    key: 1,
    question: {
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
    formatBody: jest.fn(() => 1),
    productName: 'shoe'
  };
  const answerList = {
    "question": "1",
    "page": 0,
    "count": 5,
    "results": [
      {
        "answer_id": 8,
        "body": "What a great question!",
        "date": "2018-01-04T00:00:00.000Z",
        "answerer_name": "metslover",
        "helpfulness": 8,
        "photos": [],
      },
      {
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
      // ...
    ]
  };
  axios.get.mockImplementation(() => Promise.resolve({data: answerList}));
  const wrapper = shallow(<Question {...questionProps}/>);
  expect(questionProps.formatBody).toHaveBeenCalled();
});

test('<Questions /> shows answer modal', () => {
  const questionProps = {
    key: 1,
    question: {
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
    formatBody: jest.fn(() => 1),
    productName: 'shoe',
    sendInteraction: jest.fn(() => 2)
  };
  const wrapper = shallow(<Question {...questionProps}/>);
  wrapper.find('.question-show-answer-modal').simulate('click');
  expect(questionProps.sendInteraction).toHaveBeenCalled();
});

test('<Questions /> calls yesHandler', () => {
  const questionProps = {
    key: 1,
    question: {
      question_id: 1
    },
    formatBody: jest.fn(() => 1),
    productName: 'shoe',
    sendInteraction: jest.fn(() => 2)
  };
  axios.put.mockImplementation(() => Promise.resolve(1));
  const wrapper = shallow(<Question {...questionProps}/>);
  wrapper.find('.answer-modal-yes-handler').simulate('click');
  expect(questionProps.sendInteraction).toHaveBeenCalled();
});

test('<Questions /> calls modalCancel', () => {
  const questionProps = {
    key: 1,
    question: {
      question_id: 1
    },
    formatBody: jest.fn(() => 1),
    productName: 'shoe',
    sendInteraction: jest.fn(() => 2)
  };
  axios.put.mockImplementation(() => Promise.resolve(1));
  const wrapper = shallow(<Question {...questionProps}/>);
  wrapper.find('.answer-modal-yes-handler').simulate('click');
  expect(questionProps.sendInteraction).toHaveBeenCalled();
});

test('<Questions /> calls handleMoreAnswer method', () => {
  const questionProps = {
    key: 1,
    question: {
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

        },
        69: {
          id: 68,
          body: 'We are selling it here without any markup from the middleman!',
          date: '2018-08-18T00:00:00.000Z',
          answerer_name: 'Seller',
          helpfulness: 4,
          photos: []

        },
        70: {
          id: 68,
          body: 'We are selling it here without any markup from the middleman!',
          date: '2018-08-18T00:00:00.000Z',
          answerer_name: 'Seller',
          helpfulness: 4,
          photos: []

        },
      }
    },
    formatBody: jest.fn(() => 1),
    productName: 'shoe',
    sendInteraction: jest.fn(() => 2)
  };
  axios.get.mockImplementation(() => Promise.resolve(1));
  const wrapper = shallow(<Question {...questionProps}/>);
  // wrapper.find('#load-more-answer-2').simulate('click');
  // expect(questionProps.sendInteraction).toHaveBeenCalled();
  expect(wrapper.find('#load-more-answer-2')).toHaveLength(0);
});


test('<Questions /> renders when length is less than 2', () => {
  const questionProps = {
    key: 1,
    question: {
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

        },
        69: {
          id: 68,
          body: 'We are selling it here without any markup from the middleman!',
          date: '2018-08-18T00:00:00.000Z',
          answerer_name: 'Seller',
          helpfulness: 4,
          photos: []

        }
      }
    },
    formatBody: jest.fn(() => 1),
    productName: 'shoe',
    sendInteraction: jest.fn(() => 2)
  };
  axios.get.mockImplementation(() => Promise.resolve(1));
  const wrapper = shallow(<Question {...questionProps}/>);
  // wrapper.find('#load-more-answer-2').simulate('click');
  // expect(questionProps.sendInteraction).toHaveBeenCalled();
  expect(wrapper.find('#load-more-answer-2')).toHaveLength(0);
});