import React, { Fragment, useState } from 'react';
import _ from 'underscore';

import withInteractionsApi from '../HOC/withInteractionApi.jsx';
let SizeAndQuantitySelector = function (props) {
  let currentSKU = _.pairs(props.SkusObj);

  if (props.quantity > 0) {
    var quantityRange = _.range(1, props.quantity + 1).filter(
      (quantity) => quantity <= 15
    );
  } else {
    quantityRange = [];
  }

  return (
    <Fragment>
      {props.sizeMenu > 1 ? (
        <span className='invalid-cart-message'>Please select Size </span>
      ) : null}
      <div className='size-quantity-container'>
        <select
          // defaultValue='Select Size'
          disabled={props.hasStock ? false : true}
          className='size-selector'
          size={props.sizeMenu}
          onChange={(e) => {
            props.sendInteraction('Size Selector');
            props.sizeAndQuantityClickHandler(e);
          }}>
          {!props.hasStock ? (
            <option className='size-default' id='disabled'>
              OUT OF STOCK{' '}
            </option>
          ) : (
            <option className='size-default'>{props.selectedSize}</option>
          )}

          {currentSKU
            .filter((sku) => sku[1].size !== props.selectedSize)
            .map((sku) => {
              var styleObj = {
                fontWeight: 'bold',
                fontSize: 'medium',
                display: 'flex',
              };

              if (sku[1].quantity === 0) {
                styleObj.display = 'none';
              }
              return (
                <option
                  style={styleObj}
                  key={sku[0]}
                  id={sku[0]}
                  data-quantity={sku[1].quantity}
                  value={sku[1].size}>
                  {sku[1].size}
                </option>
              );
            })}
        </select>

        <select
          onChange={() => {
            props.sendInteraction('Quantity Selector');
            props.quantityOnChange;
          }}

          className='quantity-selector'
          value={props.selectedQuantity}
          disabled={!quantityRange.length ? true : false}>
          {quantityRange.length === 0 ? (
            <option>{'---'}</option>
          ) : (
            quantityRange.map((num) => {
              return (
                <option className='quantity-options' value={num} key={num}>
                  {num}
                </option>
              );
            })
          )}
        </select>
      </div>
    </Fragment>
  );
};

export default withInteractionsApi(SizeAndQuantitySelector, 'Product Detail');
