import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App.jsx';
import RnR from './RnR.jsx';
import axios from 'axios';
import testingLibrary from '@testing-library/jest-dom';
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

describe('RnR', () => {
  test('it tests the component RnR children', () => {
    const wrapper = shallow(<RnR {...RnRProps}/>);
    expect(wrapper.find('.box1')).toHaveLength(0);
  });
});


test('<RnR /> renders properly', () => {
  const wrapper = shallow(<RnR />);
  expect(wrapper.find('div').children()).toHaveLength(0);
});

// npm t RnR.test.js