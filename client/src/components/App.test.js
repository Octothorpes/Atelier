import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App.jsx';

describe('App.jsx', () => {
  test('it should have a productId available in state on mount', () => {
    const wrapper = mount(<App></App>);
    expect(wrapper.state('productId')).toEqual(47425);
  });
});
