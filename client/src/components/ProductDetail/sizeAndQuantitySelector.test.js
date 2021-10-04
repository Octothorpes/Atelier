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

let skus = {
  1665179: {
    quantity: 0,
    size: '7',
  },
  1665180: {
    quantity: 0,
    size: '7.5',
  },
  1665181: {
    quantity: 0,
    size: '8',
  },
  1665182: {
    quantity: 0,
    size: '8.5',
  },
  1665183: {
    quantity: 0,
    size: '9',
  },
  1665184: {
    quantity: 0,
    size: '9.5',
  },
  1665185: {
    quantity: 0,
    size: '10',
  },
  1665186: {
    quantity: 0,
    size: '10.5',
  },
  1665187: {
    quantity: 0,
    size: '11',
  },
  1665188: {
    quantity: 0,
    size: '11.5',
  },
  1665189: {
    quantity: 0,
    size: '12',
  },
};
const props = {
  selectedSize: 'Select Size',
  hasStock: false,
  sizeMenu: 1,
  SkusObj: skus,
  quantity: 0,
  sendInteraction: () => {
    return 'Success';
  },
  quantityOnChange: (e) => {
    return e;
  },
  sizeAndQuantityClickHanlder: (e) => {
    return e;
  },
  selectedQuantity: 1,
};
const props2 = {
  selectedSize: 'Select Size',
  hasStock: true,
  sizeMenu: 1,
  SkusObj: skus,
  quantity: 0,
  sendInteraction: () => {
    return 'Success';
  },
  quantityOnChange: (e) => {
    return e;
  },
  sizeAndQuantityClickHanlder: (e) => {
    return e;
  },
  selectedQuantity: 1,
};
const props3 = {
  selectedSize: '7',
  hasStock: true,
  sizeMenu: 1,
  SkusObj: skus,
  quantity: 14,
  sendInteraction: jest.fn(),
  quantityOnChange: jest.fn(),
  sizeAndQuantityClickHandler: jest.fn(),
  selectedQuantity: 1,
};
// npm test sizeAndQuantitySelector.test.js

describe('<SizeAndQuantitySelector/>', () => {
  test('Style selector should display an Out of Stock message if there is no Stock', () => {
    let wrapper = mount(<SizeAndQuantitySelector {...props} />);
    expect(wrapper.find('.size-selector').render().text()).toMatch(
      /OUT OF STOCK/
    );
  });
  test('Style Selector should display Select Size if there is stock', () => {
    let wrapper = mount(<SizeAndQuantitySelector {...props2} />);
    expect(wrapper.find('.size-selector').render().text()).toMatch(
      /Select Size/
    );
  });
  test('Quantity selector should default to 1 if a size has been selected', () => {
    let wrapper = mount(<SizeAndQuantitySelector {...props} />);
    expect(wrapper.find('.quantity-selector').render().text()).toMatch(/---/);
  });
  test('Quantity selector should default to 1 if a size has been selected', () => {
    let wrapper = mount(<SizeAndQuantitySelector {...props3} />);
    expect(wrapper.find('.quantity-selector').render().text()).toMatch(/1/);
  });
  test('size selector should call the correct functions on click', () => {
    let wrapper = mount(<SizeAndQuantitySelector {...props3} />);

    let select = wrapper.find('.size-selector');

    select.simulate('change');
    expect(props3.sendInteraction).toHaveBeenCalled();
  });
  test('size selector should call the correct functions on click', () => {
    let wrapper = mount(<SizeAndQuantitySelector {...props3} />);

    let select = wrapper.find('.quantity-selector');

    select.simulate('change');
    expect(props3.sendInteraction).toHaveBeenCalled();
  });
});
