import React from 'react';
import { shallow } from 'enzyme';

import App from './App.jsx';

test('<App />', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('h1').text()).toBe('Welcome to FEC Project Atelier');
});