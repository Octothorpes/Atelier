import React from 'react';
import { mount, shallow } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchBar from './searchBar.jsx';
import Features from './features.jsx';
import ProductDescriptionAndFeatures from './productDescriptionAndFeatures.jsx';
import { ShallowWrapper } from 'enzyme/build';
import CheckboxWithLabel from './checkboxWithLabel';
import axios from 'axios';
jest.mock('axios');

describe('<SearchBar />', () => {
  test('it should render correctly with no props', () => {
    const wrapper = shallow(<SearchBar />);

    expect(wrapper).toMatchSnapshot();
  });

  test('it should have two children with the className .mockSearchIcon', () => {
    const wrapper = shallow(<SearchBar />);

    expect(wrapper.find('.mockSearchIcon')).toHaveLength(2);
  });
});

describe('testingcompatibility', () => {
  test('CheckboxWithLabel changes the text after click', () => {
    // Render a checkbox with label in the document
    const checkbox = mount(<CheckboxWithLabel labelOn='On' labelOff='Off' />);
    expect(checkbox.props().labelOn).toEqual('On');
    expect(checkbox.props().labelOff).toEqual('Off');
    expect(checkbox.text()).toEqual('Off');
    checkbox.find('input').simulate('change');
    expect(checkbox.text()).toEqual('On');
  });
});
