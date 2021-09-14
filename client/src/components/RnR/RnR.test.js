import React from 'react';
import { shallow } from 'enzyme';

import RnR from './RnR.jsx';

describe('<RnR />', () => {
  test('it tests title for Ratings & Reviews', () => {
    const wrapper = shallow(<RnR />);
    expect(wrapper.find('h4').text()).toBe('RATINGS & REVIEWS');
  });


  test('it tests the component RnR children', () => {
    const wrapper = shallow(<RnR />);
    expect(wrapper.find('.box1')).toHaveLength(0);
  });


});