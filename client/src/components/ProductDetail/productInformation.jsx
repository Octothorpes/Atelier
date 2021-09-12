import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dummydata from './productInformationDummy.js';

const productStyles = dummydata.productStyles;
const productInfo = dummydata.productInfo;

class ProductInformation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productStyles: productStyles,
      productInfo: [productInfo],
      defaultStyle: productStyles[0].name,
      originalPrice: productStyles[0].original_price,
      checkedId: productStyles[0].style_id,
    };

    this.styleClickHandler = this.styleClickHandler.bind(this);
  }

  styleClickHandler(e, originalPrice, salesprice, def) {
    console.log(e.target['id']);
    const newCheckedId = Number(e.target['id']);
    const activeClass = this.state.active;
    this.setState({ defaultStyle: e.target.name, originalPrice, checkedId: newCheckedId });
  }

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
export default ProductInformation;
