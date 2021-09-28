import React from 'react';
import ProductDetailStyles from './ProductDetailStyles.css';
import SearchBar from './searchBar.jsx';
import ProductDescriptionAndFeatures from './productDescriptionAndFeatures.jsx';
import ProductInformation from './productInformation.jsx';
import Tracker from './imageGallery.jsx';
import axios from 'axios';
import _ from 'underscore';
class productDetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayProduct: {},
      displayStyles: [],
      mounted: false,
      sorted: [],
    };

    this.sortStyles = this.sortStyles.bind(this);
  }
  sortStyles(styleObj) {
    let sortedStyles = Object.values(
      _.sortBy(this.props.displayStyles, function (obj) {
        return obj['default?'] === false;
      })
    );

    return sortedStyles;
  }

  componentDidMount() {
    axios
      .get(`/api/products/${this.props.productId}/styles`)
      .then((results) => {
        console.log('APICALL', results.data);
        // this.setState({ displayStyles: results.data });
        return results.data.results;
      })
      .then((data) => {
        let test = Object.values(
          _.sortBy(data, function (obj) {
            return obj['default?'] === false;
          })
        );
        // this.setState({sorted:test})
        console.log('test', test);
      })
      .catch((err) => {
        console.log('error', err);
      });
    // .then((data) => {
    //   this.setState({ displayStyles: data }, () => {
    //     console.log('this.state--------', this.state);
    //   });
    // });
  }
  render() {
    let sorted = this.sortStyles();
    return (
      <div className='product-detail-container'>
        <SearchBar />
        <div className='mock-banner'>
          {' '}
          Announcement message place holder! = sale/dicount offer -- new product
          highlight{' '}
        </div>

        <ProductInformation
          productRatingStars={this.props.productRatingStars}
          sortedStyles={sorted}
          productId={this.props.productId}
          displayStyles={this.props.displayStyles}
          productInfo={[this.props.displayProduct]}
        />

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
