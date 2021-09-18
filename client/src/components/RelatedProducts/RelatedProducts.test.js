/* eslint-disable */

import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import App from '../App.jsx';
import RelatedProducts from './RelatedProducts.jsx';
import RelatedCard from './RelatedCard.jsx';
import Card from './Card.jsx';
import RelatedLeft from './RelatedLeft.jsx';
import RelatedRight from './RelatedRight.jsx';
import OutfitProducts from './OutfitProducts.jsx';
import renderer from 'react-test-renderer';

describe('<RelatedProducts />', () => {
  it('Related products has 3 child', () => {
    const tree = renderer.create(<RelatedProducts />).toJSON();
    expect(tree.children.length).toBe(3);
  });

  it('Related Card has 1 child', () => {
    const tree = renderer.create(<RelatedCard />).toJSON();
    expect(tree.children.length).toBe(4);
  });

  it('Outfit Products has 3 child', () => {
    const tree = renderer.create(<OutfitProducts />).toJSON();
    expect(tree.children.length).toBe(3);
  });

  // it('renders correctly', () => {
  //   const tree = renderer.create(<Card />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

  it('Left Arrow has 1 child', () => {
    const tree = renderer.create(<RelatedLeft />).toJSON();
    expect(tree.children.length).toBe(1);
  });

  it('Right Arrow has 1 child', () => {
    const tree = renderer.create(<RelatedRight />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});