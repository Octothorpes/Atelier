import React from 'react';
import ProductDetailStyles from './ProductDetailStyles.css';

import Features from './features.jsx';

class ProductDescriptionAndFeatures extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className='product-description_features-container'>
        <div className='product-description_features'>
          <h3> {this.props.slogan} </h3>

          <p>{this.props.description}</p>
        </div>

        <div className='features'>
          <Features features={this.props.features} />
        </div>
      </div>
    );
  }
}



export default ProductDescriptionAndFeatures;
