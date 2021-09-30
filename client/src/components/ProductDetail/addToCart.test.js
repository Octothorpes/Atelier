import React from 'react';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddToCart from './addToCart.jsx';
import toJson from 'enzyme-to-json';

// npm test addToCart.test.js
describe('<addToCart/>', () => {
  test('find an element', () => {
    const wrapper = mount(<AddToCart/>);

    expect(wrapper.find('.addToCart-container')).toHaveLength(1);
  });
  test('find an element', () => {
    const wrapper = mount(<AddToCart/>);
    expect(
      toJson(wrapper, {
        noKey: false,
        ignoreDefaultProps: true,
        mode: 'deep',
      })
    ).toMatchSnapshot();
  });
});
