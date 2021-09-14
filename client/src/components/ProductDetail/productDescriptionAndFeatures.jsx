import React from 'react';
import ProductDetailStyles from './ProductDetailStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

let Features = function (props) {
  return (
    <div className='features-map'>
      {props.features.map((feature, id) => {
        return (
          <div className='feature-lockup' key={id}>
            <FontAwesomeIcon icon='check' />{' '}
            <span className='feature-list'>
              {feature.value}
              {feature.feature}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ProductDescriptionAndFeatures;
