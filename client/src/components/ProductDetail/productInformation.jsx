import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dummydata from './productInformationDummy.js';
import Tracker from './imageGallery.jsx';
import _ from 'underscore';
import AddToCart from './addToCart.jsx';

// const productStyles = dummydata.productStyles;
// const productInfo = dummydata.productInfo;

class ProductInformation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: this.props.productId,
      productStyles: this.props.displayStyles,
      productInfo: this.props.productInfo,
      selectedPhoto: this.props.sortedStyles[0].photos[0].url,
      defaultStyle: this.props.sortedStyles[0].name,
      originalPrice: this.props.sortedStyles[0].original_price,
      checkedId: this.props.sortedStyles[0].style_id,
      salesPrice: this.props.sortedStyles[0].sale_price,
      selectedSize: 'Select Size',
      Skus: [this.props.sortedStyles[0].skus],
      SkusObj: this.props.sortedStyles[0].skus,
      quantity: 0,
      selectedQuantity: 1,
      cart: {},
      cartIsValid: false
    };

    this.styleClickHandler = this.styleClickHandler.bind(this);
    this.sizeAndQuantityClickHandler =
      this.sizeAndQuantityClickHandler.bind(this);
    this.quantityOnChange = this.quantityOnChange.bind(this);
    this.addToCartClickHandler = this.addToCartClickHandler.bind(this);
  }

  styleClickHandler(e, originalPrice, salesPrice, def) {
    const newCheckedId = Number(e.target['id']);
    console.log('here', this.props.sortedStyles);

    let newSkus = _.findWhere(this.state.productStyles, {
      // eslint-disable-next-line camelcase
      style_id: newCheckedId,
    });
    console.log('e', newSkus);
    this.setState({
      defaultStyle: e.target.name,
      originalPrice,
      checkedId: newCheckedId,
      salesPrice,
      SkusObj: newSkus.skus,
      selectedPhoto: newSkus.photos[0].url,
      quantity: 0,
      selectedSize: 'Select Size'
    });
  }
  addToCartClickHandler(e) {
    e.preventDefault();
    // if quantity ==1 and cart is not valid,

  }
  sizeAndQuantityClickHandler(e) {
    let idx = e.target.selectedIndex;
    let skuId = Number(e.target.options[idx]['id']);
    let size = e.target.options[idx].value;
    let quantity = Number(e.target.options[idx].dataset.quantity);

    console.log('size', size);
    let newSkus = _.findWhere(this.state.productStyles, {
      // eslint-disable-next-line camelcase
      style_id: this.state.checkedId,
    }).skus;

    this.setState({
      quantity: quantity,
      SkusObj: newSkus,
      selectedQuantity: 1,
      selectedSize: size,
    });
  }

  quantityOnChange(e) {
    let newSelectedQuantity = Number(e.target.value);
    this.setState({ selectedQuantity: newSelectedQuantity });
  }



  render() {
    return (
      <div className='gallery-info-container'>
        <div className='product-info-container'>
          <div className='ratings'>
            <FontAwesomeIcon icon={['far', 'star']} />
            <FontAwesomeIcon icon={['far', 'star']} />
            <FontAwesomeIcon icon={['far', 'star']} />
            <FontAwesomeIcon icon={['far', 'star']} />
            <FontAwesomeIcon icon={['far', 'star']} />
            <a style={{ textDecoration: ' underline' }}> Read All Reviews</a>
          </div>
          <CategoryName
            originalPrice={this.state.originalPrice}
            salesPrice={this.state.salesPrice}
            productInfo={this.state.productInfo}
            productStyles={this.state.productStyles}
          />

          <StyleSelector
            checkedId={this.state.checkedId}
            defaultStyle={this.state.defaultStyle}
            productStyles={this.state.productStyles}
            sortedStyles={this.props.sortedStyles}
            photos={this.state.productStyles[1].photos}
            styleClickHandler={this.styleClickHandler}
          />

          <SizeAndQuantitySelector
            selectedSize={this.state.selectedSize}
            selectedQuantity={this.state.selectedQuantity}
            quantityOnChange={this.quantityOnChange}
            quantity={this.state.quantity}
            sizeAndQuantityClickHandler={this.sizeAndQuantityClickHandler}
            productStyles={this.state.productStyles}
            SkusObj={this.state.SkusObj}
            selectedSkus={this.state.Skus}
            checkedId={this.state.checkedId}
          />
          <AddToCart
            selectedSize = {this.state.selectedSize}
            quantity={this.state.quantity}
            selectedQuantity={this.state.selectedQuantity}
          />
        </div>
        <Tracker
          image={this.state.selectedPhoto}
          // images={this.props.displayStyles}
        />
      </div>
    );
  }
}

let CategoryName = function (props) {
  return (
    <div>
      {props.productInfo.map((productData) => {
        return (
          <div key={productData.id}>
            <div className='product-category'>
              {' '}
              Category:{productData.category}
            </div>
            <h2 className='expanded-product-name'>{productData.name}</h2>
          </div>
        );
      })}
      {props.salesPrice === null ? (
        <div className='product-category'>${props.originalPrice}</div>
      ) : (
        <div className='product-category'>
          <span style={{ color: 'red' }}>${props.salesPrice}</span>{' '}
          <span style={{ textDecoration: 'line-through' }}>
            ${props.originalPrice}
          </span>
        </div>
      )}
    </div>
  );
};

let StyleSelector = function (props) {
  let photos = props.photos;

  let mappedStyles = props.sortedStyles.map((style) => {
    return (
      <div className='style-thumbnail-container' key={style.style_id}>
        <FontAwesomeIcon
          className={
            props.checkedId === style.style_id
              ? 'check-circle active-style'
              : 'check-circle'
          }
          icon='check-circle'
        />

        <img
          id={style.style_id}
          name={style.name}
          onClick={(e) => {
            props.styleClickHandler(
              e,
              style.original_price,
              style.sale_price,
              style['default?']
            );
          }}
          className={'style-thumbnail'}
          src={style.photos[0].thumbnail_url}></img>
      </div>
    );
  });

  return (
    <div className='style-header'>
      Style{':'} <span className='style-name'>{props.defaultStyle}</span>
      <div className='style-selector'>{mappedStyles}</div>
    </div>
  );
};

let SizeAndQuantitySelector = function (props) {
  let currentSKU = _.pairs(props.SkusObj);

  let sizesStock = currentSKU.reduce((quantity, current) => {
    quantity += current[1].quantity;
    return quantity > 0;
  }, 0);

  if (props.quantity > 0) {
    var quantityRange = _.range(1, props.quantity + 1).filter(
      (quantity) => quantity <= 15
    );
  } else {
    quantityRange = [];
  }

  return (
    <div className='size-quantity-container'>
      <select
        // defaultValue='Select Size'
        value='Select Size'
        disabled={sizesStock ? false : true}
        className='size-selector'
        onChange={(e) => props.sizeAndQuantityClickHandler(e)}>
        {!sizesStock ? (
          <option className='size-default'>OUT OF STOCK </option>
        ) : (
          <option className='size-default'>{props.selectedSize}</option>
        )}

        {currentSKU.map((sku) => {
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
        onChange={props.quantityOnChange}
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
  );
};

export default ProductInformation;
