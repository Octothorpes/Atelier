import React from 'react';
import { shallow, mount } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {SearchQuestions} from './SearchQuestions.jsx';
import {QuestionsList} from './QuestionsList.jsx';
import QuestionModal from './Modals/AddNewQuestion.jsx';
import axios from 'axios';
jest.mock('axios');


const SearchProps = {
  formatBody: jest.fn(() => 3),
  sendInteraction: jest.fn(() => 1)
};

describe('<SearchQuestions />', () => {
  test('it tests title for Questions & Answers', () => {
    axios.get.mockResolvedValue = 54;
    const wrapper = shallow(<SearchQuestions {...SearchProps}/>, {disableLifecycleMethods: true});
    expect(wrapper.find('.header-title').text()).toBe('QUESTIONS AND ANSWERS');
  });

  test('it tests the subcomponent search box', () => {
    const wrapper = shallow((
      <div className="questions-search">
        <input type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
        />
        <FontAwesomeIcon className="search-icon" icon="search"/>
      </div>
    ));
    expect(wrapper.contains(<div className="questions-search">
      <input type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
      />
      <FontAwesomeIcon className="search-icon" icon="search"/>
    </div>)).toEqual(true);
  });

  test('it tests the component SearchQuestions children', () => {
    const wrapper = shallow(<SearchQuestions {...SearchProps}/>, {disableLifecycleMethods: true});
    expect(wrapper.find('.search-questions')).toHaveLength(1);
  });

  test('it tests the component SearchQuestions onChangeHandler', () => {
    const wrapper = shallow(<SearchQuestions {...SearchProps}/>, {disableLifecycleMethods: true});
    const event = {target: {name: 'special', value: 'party'}};
    wrapper.find('.questions-search-input').simulate('change', event);
    expect(SearchProps.sendInteraction).toHaveBeenCalled();
  });

  test('it tests the component SearchQuestions addNewQuestion', () => {
    jest.mock('axios');
    const SearchProps = {
      formatBody: jest.fn(() => 3),
      sendInteraction: jest.fn(() => 1),
      productName: 'toy',
      addNewQuestion: () => 1,
      questionList: [],
      onCancel: () => 2
    };
    axios.get.mockImplementation(() => Promise.resolve(1));
    axios.post = jest.fn(() => 2);
    const wrapper = mount(<SearchQuestions {...SearchProps}/>, {disableLifecycleMethods: true});
    const event = {target: {name: 'special', value: 'party'}};
    console.log(wrapper.html());
    wrapper.find('.modal-submit').simulate('click', event);
    expect(SearchProps.sendInteraction).toHaveBeenCalled();
  });

  test('it tests the component componentDidMount', () => {
    axios.get.mockImplementation(() => Promise.resolve(1));
    const wrapper = shallow(<SearchQuestions {...SearchProps}/>);
    expect(SearchProps.formatBody).toHaveBeenCalled();
  });

});