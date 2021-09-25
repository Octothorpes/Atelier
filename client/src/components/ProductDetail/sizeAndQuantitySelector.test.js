import React from 'react';
import { mount, shallow } from 'enzyme';
import { library } from '@fortawesome/fontawesome-svg-core';
import SizeAndQuantitySelector from './sizeAndQuantitySelector.jsx';
import { ShallowWrapper } from 'enzyme/build';
import defaultState from '../defaultState';
import ProductInformation from './productInformation.jsx';
import ProductDetailContainer from './productDetailContainer.jsx';
import App from '../App.jsx';
import _ from 'underscore';

// const props = {
//   totalStock: (SKU) => {
//     let currentSku = _.pairs(SKU);
//     let sizesStock = currentSku.reduce((quantity, current) => {
//       quantity += current[1].quantity;
//       return quantity > 0;
//     }, 0);
//     return sizesStock;
//   },
//   hasStock: true,
//   sizeMenu: 1,
//   selectedSize: 'Select Size',
//   selectedQuantity: 1,
// };
const props = {

  selectedSize: 'Select Size',

};
// npm test sizeAndQuantitySelector.test.js

describe('<SizeAndQuantitySelector/>', () => {
  test('basic', () => {
    let wrapper = ShallowWrapper(<SizeAndQuantitySelector {...props} />);
    expect(wrapper.find('.size-selector').options[0].value).toMatch(/Select Size/);
  });
});
