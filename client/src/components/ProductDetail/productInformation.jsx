import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dummydata from './productInformationDummy.js';
import Tracker from './imageGallery.jsx';
import _ from 'underscore';

// const productStyles = dummydata.productStyles;
// const productInfo = dummydata.productInfo;

class ProductInformation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: this.props.productId,
      productStyles: this.props.displayStyles,
      productInfo: this.props.productInfo,
      defaultStyle: this.props.displayStyles[0].name,
      originalPrice: this.props.displayStyles[0].original_price,
      checkedId: this.props.displayStyles[0].style_id,
      Skus: [this.props.displayStyles[0].skus],
      SkusObj: this.props.displayStyles[0].skus,
      quantity: 0,
      selectedQuantity: 1,
    };

    this.styleClickHandler = this.styleClickHandler.bind(this);
    this.sizeAndQuantityClickHandler =
      this.sizeAndQuantityClickHandler.bind(this);
    this.quantityOnChange = this.quantityOnChange.bind(this);
  }

  styleClickHandler(e, originalPrice, salesprice, def) {
    const newCheckedId = Number(e.target['id']);

    let newSkus = _.findWhere(this.state.productStyles, {
      // eslint-disable-next-line camelcase
      style_id: newCheckedId,
    }).skus;

    this.setState({
      defaultStyle: e.target.name,
      originalPrice,
      checkedId: newCheckedId,
      SkusObj: newSkus,
      quantity: 0,
    });
  }

  sizeAndQuantityClickHandler(e) {
    let idx = e.target.selectedIndex;
    let skuId = Number(e.target.options[idx]['id']);
    let size = e.target.options[idx].value;
    let quantity = Number(e.target.options[idx].dataset.quantity);

    let newSkus = _.findWhere(this.state.productStyles, {
      // eslint-disable-next-line camelcase
      style_id: this.state.checkedId,
    }).skus;

    this.setState({
      quantity: quantity,
      SkusObj: newSkus,
      selectedQuantity: 1,
    });
  }

  quantityOnChange(e) {
    let newSelectedQuantity = Number(e.target.value);
    this.setState({ selectedQuantity: newSelectedQuantity });
  }

  // componentDidMount() {
  //   let selectedSkus = productStyles.filter(function (styleId) {
  //     return styleId.style_id === productStyles[0].style_id;
  //   });
  //   this.setState({Skus:selectedSkus})
  //   console.log('skus', selectedSkus);
  // }

  render() {
    return (
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
          productInfo={this.state.productInfo}
          productStyles={this.state.productStyles}
        />

        <StyleSelector
          checkedId={this.state.checkedId}
          defaultStyle={this.state.defaultStyle}
          productStyles={this.state.productStyles}
          photos={this.state.productStyles[1].photos}
          styleClickHandler={this.styleClickHandler}
        />

        <SizeAndQuantitySelector
          selectedQuantity={this.state.selectedQuantity}
          quantityOnChange={this.quantityOnChange}
          quantity={this.state.quantity}
          sizeAndQuantityClickHandler={this.sizeAndQuantityClickHandler}
          productStyles={this.state.productStyles}
          SkusObj={this.state.SkusObj}
          selectedSkus={this.state.Skus}
          checkedId={this.state.checkedId}
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

      <div className='product-category'>${props.originalPrice}</div>
    </div>
  );
};

let StyleSelector = function (props) {
  let photos = props.photos;

  let mappedStyles = props.productStyles.map((style) => {
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
        disabled={sizesStock ? false : true}
        className='size-selector'
        onChange={(e) => props.sizeAndQuantityClickHandler(e)}>
        {!sizesStock ? (
          <option className='size-default'>OUT OF STOCK </option>
        ) : (
          <option className='size-default'>Select Size </option>
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
