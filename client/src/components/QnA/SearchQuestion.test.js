import React from 'react';
import { shallow, mount } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {SearchQuestions} from './SearchQuestions.jsx';
import axios from 'axios';
jest.mock('axios');


const SearchProps = {
  formatBody: () => {
    return 42;
  },
  sendInteraction: () => {
    return 46;
  }
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


});