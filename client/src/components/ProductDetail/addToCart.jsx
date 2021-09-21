import React from 'react';

let AddToCart = function (props) {
  console.log('ADD TO CART PROPS', props);
  return (
    <div className='addToCart-container'>
      <button className='add-to-cart'>Add To cart</button>

      <button className='add-to-cart-star'>Star</button>
    </div>
  );
};

export default AddToCart;
