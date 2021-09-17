import React from 'react';
import { shallow } from 'enzyme';

import RnR from './RnR.jsx';
import axios from 'axios';
jest.mock('axios');

const RnRProps = {
  formatBody: () => {
    axios.post.mockResolvedValue({
      data: {
        value: 42
      }
    });
  }
};

describe('<RnR />', () => {
  test('it tests title for Ratings & Reviews', () => {
    const wrapper = shallow(<RnR {...RnRProps}/>);
    expect(wrapper.find('h4').text()).toBe('RATINGS & REVIEWS');
  });


  test('it tests the component RnR children', () => {
    const wrapper = shallow(<RnR {...RnRProps}/>);
    expect(wrapper.find('.box1')).toHaveLength(0);
  });


});