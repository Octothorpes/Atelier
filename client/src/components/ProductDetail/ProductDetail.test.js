import React from 'react';
import { shallow } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchBar from './searchBar.jsx';
import Features from './features.jsx';
import ProductDescriptionAndFeatures from './productDescriptionAndFeatures.jsx';
// import { expect } from 'chai';

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

