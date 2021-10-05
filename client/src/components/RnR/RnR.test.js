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
  it('able to find an html element', () => {
    const shallowWrapper = shallow(<RnR {...RnRProps}/>);
    expect(shallowWrapper.find({id: 'RnRtitle'}).toContain('RATINGS & REVIEWS'));
  });


  test('it tests the component RnR children', () => {
    const wrapper = shallow(<RnR {...RnRProps}/>);
    expect(wrapper.find('.box1')).toHaveLength(0);
  });


});


// describe('RnR', () => {
//   it('should render correctly in "debug" mode', () => {
//     const component = shallow(<RnR debug />);

//     expect(component).toMatchSnapshot();
//   });


// });

// npm t RnR.test.js