import React from 'react';
import { shallow } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchQuestions from './SearchQuestions.jsx';

describe('<SearchQuestions />', () => {
  test('it tests title for Questions & Answers', () => {
    const wrapper = shallow(<SearchQuestions />);
    expect(wrapper.find('h1').text()).toBe('QUESTIONS AND ANSWERS');
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
    const wrapper = shallow(<SearchQuestions />);
    expect(wrapper.find('.search-questions')).toHaveLength(1);
  });


});