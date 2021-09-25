import React from 'react';
import withInteractionsApi from '../HOC/withInteractionApi.jsx';
let AddToCart = function (props) {
  return (
    <div
      className='addToCart-container'
      style={
        props.hasStock ? { visibility: 'visible' } : { visibility: 'hidden' }
      }>
      <button
        onClick={function () {
          props.sendInteraction('Add to Cart');
          props.addToCartClickHandler;
        }}
        className='add-to-cart'>
        Add To cart
      </button>

      <button className='add-to-cart-star'>Star</button>
    </div>
  );
};

export default withInteractionsApi(AddToCart, 'Product Detail');
