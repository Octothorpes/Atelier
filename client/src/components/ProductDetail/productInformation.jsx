import React from 'react';
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
    };
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
          productInfo={this.state.productInfo}
          productStyles={this.state.productStyles}
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

      <div className='product-category'>
        {props.productStyles[0].original_price}
      </div>
    </div>
  );
};
export default ProductInformation;
