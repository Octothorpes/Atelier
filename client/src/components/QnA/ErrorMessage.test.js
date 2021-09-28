import React from 'react';
import { shallow } from 'enzyme';
import ErrorMessage from './ErrorMessage.jsx';

test('<ErrorMessage /> has one children', () => {
  const wrapper = shallow(<ErrorMessage />);
  expect(wrapper.find('div').children()).toHaveLength(1);
});
