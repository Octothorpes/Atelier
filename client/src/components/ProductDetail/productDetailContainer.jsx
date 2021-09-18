import React from 'react';
import ProductDetailStyles from './ProductDetailStyles.css';
import SearchBar from './searchBar.jsx';
import ProductDescriptionAndFeatures from './productDescriptionAndFeatures.jsx';
import ProductInformation from './productInformation.jsx';
import Tracker from './imageGallery.jsx';
import axios from 'axios';
class productDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='product-detail-container'>
        <SearchBar />
        <div className='mock-banner'>
          {' '}
          Announcement message place holder! = sale/dicount offer -- new product
          highlight{' '}
        </div>
        <div className='gallery-info-container'>
          <ProductInformation
            productId={this.props.productId}
            displayStyles={this.props.displayStyles}
            productInfo={[this.props.displayProduct]}
          />
          <Tracker
            image={this.props.displayStyles[0].photos[0].url}
            images={this.props.displayStyles}
          />
        </div>
        <ProductDescriptionAndFeatures
          description={this.props.displayProduct.description}
          slogan={this.props.displayProduct.slogan}
          features={this.props.displayProduct.features}
        />
      </div>
    );
  }
}

export default productDetailContainer;
