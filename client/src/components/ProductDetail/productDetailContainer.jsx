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
      productId: this.props.productId,
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

  // componentDidMount() {
  //   let productId = window.location.pathname.substring(10);
  //   productId = Number(productId);
  //   let compare = this.state.productId;
  //   let truth = productId === compare;
  //   this.setState({mounted:true})
  //   console.log('truth', truth, 'window', productId, 'comparestate', compare);

  //   if (!truth) {
  //     axios
  //       .get(`/api/products/${productId}/styles`)
  //       .then((results) => {
  //         console.log('APICALL', results.data);
  //         // this.setState({ displayStyles: results.data });
  //         return results.data.results;
  //       })
  //       .then((data) => {
  //         console.log('DATA', data);
  //         let test = Object.values(
  //           _.sortBy(data, function (obj) {
  //             return obj['default?'] === false;
  //           })
  //         );
  //         this.setState({ sorted: test, mounted: true });
  //         console.log('test', this.state.sorted);
  //       })
  //       .catch((err) => {
  //         console.log('error', err);
  //       });
  //   }
  // }

  // componentWillUnmount() {
  //   this.setState({ mounted: false });
  // }
  render() {
    let sorted = this.sortStyles();
    if (!sorted.length) {
      return (
        <div className='bad-api-data-container'>
          <p className='bad-api-data'>
            Something Went Wrong! This Item is no longer carried by Atelier.
            Please select another Item{' '}
          </p>
        </div>
      );
    }
    return (
      <div className='product-detail-container'>
        <SearchBar grabNightShift={this.props.grabNightShift} nightShift={this.props.nightShift}/>

        <div className='mock-banner' style= {{visibility: 'hidden'}}>
          {' '}
          Announcement ! sale/discount offer -- new product
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
