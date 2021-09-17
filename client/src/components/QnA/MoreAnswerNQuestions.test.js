import React from 'react';
import { shallow } from 'enzyme';
import MoreQuestionsNAnswers from './MoreQuestionsNAnswers.jsx';


test('<MoreQuestionsNAnswers /> renders two buttons', () => {
  const wrapper = shallow(<MoreQuestionsNAnswers />);
  expect(wrapper.find('.more-questions-answers').children()).toHaveLength(2);
});
