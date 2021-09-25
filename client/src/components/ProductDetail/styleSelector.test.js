import React from 'react';
import { mount, shallow } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import StyleSelector from './styleSelector.jsx';
jest.mock('axios');

const props = {};

describe('StyleSelctor', () => {
  test('basictest', () => {
    const wrapper = shallow(<StyleSelector />);


  });
});
