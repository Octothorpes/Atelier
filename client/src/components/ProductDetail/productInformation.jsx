import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dummydata from './productInformationDummy.js';

import _ from 'underscore';

const productStyles = dummydata.productStyles;
const productInfo = dummydata.productInfo;

class ProductInformation extends React.Component {
  constructor(props) {
    super(props);
    // var styleSkus = productStyles.filter(id => id === this.state.checkedId);
    this.state = {
      productId: productInfo.id,
      productStyles: productStyles,
      productInfo: [productInfo],
      defaultStyle: productStyles[0].name,
      originalPrice: productStyles[0].original_price,
      checkedId: productStyles[0].style_id,
      Skus: [productStyles[0].skus],
      SkusObj: productStyles[0].skus,
      quantity: 0,
    };

    this.styleClickHandler = this.styleClickHandler.bind(this);
    this.sizeAndQuantityClickHandler =
      this.sizeAndQuantityClickHandler.bind(this);
  }

  styleClickHandler(e, originalPrice, salesprice, def) {
    console.log(e.target['id']);
    const newCheckedId = Number(e.target['id']);
    const activeClass = this.state.active;
    this.setState({
      defaultStyle: e.target.name,
      originalPrice,
      checkedId: newCheckedId,
    });
  }

  sizeAndQuantityClickHandler(e) {
    let idx = e.target.selectedIndex;
    let skuId = Number(e.target.options[idx]['id']);
    let size = e.target.options[idx].value;
    let quantity = Number(e.target.options[idx].dataset.quantity);

    console.log('Style and click', idx, skuId, size, quantity);
    this.setState({ quantity: quantity });
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
  let options = props.selectedSkus.map((sku) => {
    return Object.values(sku);
  });
  options = options.flat(1);

  let test = _.pairs(props.SkusObj);
  let test2 = options.map((object) => {
    return _.range(1, object.quantity + 1).filter((quantity) => quantity <= 15);
  });

  let quantityRange = _.range(1, props.quantity + 1).filter(
    (quantity) => quantity <= 15
  );

  let test3 = props.productStyles
    .filter((styleObj) => {
      return styleObj.style_id === props.checkedId;
    })
    .map((styleObj) => _.pairs(styleObj.skus));

  // console.log('test3', test3);
  console.log('test', quantityRange);
  // console.log('test2', test2);

  // console.log('here', opt, 'skus',props.selectedSkus[0][0]);
  return (
    <div className='size-quantity-container'>
      <select
        className='size-selector'
        onChange={(e) => props.sizeAndQuantityClickHandler(e)}>
        <option> Select Size</option>
        {test.map((sku) => {
          return (
            <option
              key={sku[0]}
              id={sku[0]}
              data-quantity={sku[1].quantity}
              value={sku[1].size}>
              {' '}
              {sku[1].size}
            </option>
          );
        })}
      </select>

      <select placeholder="whatever">
        {quantityRange.length === 0 ? (
          <option>{'---'}</option>
        ) : (
          quantityRange.map((num) => <option key={num}>{num}</option>)
        )}
      </select>
    </div>
  );
};

export default ProductInformation;
