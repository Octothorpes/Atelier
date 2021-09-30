import React from 'react';
import { mount, shallow } from 'enzyme';
import { library } from '@fortawesome/fontawesome-svg-core';
import SizeAndQuantitySelector from './sizeAndQuantitySelector.jsx';
import { ShallowWrapper } from 'enzyme/build';
import defaultState from '../defaultState';
import productInformationMockProps from './productInformationMockProps';
import ProductInformation from './productInformation.jsx';
import ProductDetailContainer from './productDetailContainer.jsx';
import App from '../App.jsx';
import _ from 'underscore';

const props = {
  productRatingStars: productInformationMockProps.productRatingStars,
  sortedStyles: productInformationMockProps.sortedStyles,
  productId: productInformationMockProps.productId,
  displayStyles: productInformationMockProps.displayStyles,
  productInfo: productInformationMockProps.productInfo,
};

describe('<ProductInformation>', () => {
  test('setup', () => {
    const wrapper = shallow(<ProductInformation {...props} />);

    expect(
      wrapper.containsMatchingElement(
        <div className='gallery-info-container'></div>
      )
    ).toBeTruthy();
  });
});
