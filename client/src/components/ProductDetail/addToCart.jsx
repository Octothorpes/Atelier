import React from 'react';

let AddToCart = function (props) {
  return (
    <div className='addToCart-container'>
      <select className="add-to-cart" >
        <option>Add To cart</option>
      </select>

      <select className='add-to-cart-star'>
        <option>Star</option>
      </select>
    </div>
  );
};

export default AddToCart;
