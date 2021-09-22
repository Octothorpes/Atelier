import React from 'react';

let AddToCart = function (props) {
  return (
    <div
      className='addToCart-container'
      style={
        props.hasStock ? { visibility: 'visible' } : { visibility: 'hidden' }
      }>
      <button onClick={props.addToCartClickHandler} className='add-to-cart'>
        Add To cart
      </button>

      <button className='add-to-cart-star'>Star</button>
    </div>
  );
};

export default AddToCart;
