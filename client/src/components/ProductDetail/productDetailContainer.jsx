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

    this.state = {
      productId: this.props.productId,
      displayStyle: [],
      didUpdate: false,
    };
    this.getStyles = this.getStyles.bind(this);
  }

  getStyles() {
    let body = this.props.formatBody(
      'Get',
      `/products/${this.state.productId}/styles`
    );

    axios
      .post('/api/*', body)
      .then((results) => {
        //console.log('results', results);
        this.setState({ displayStyle: results.data.results, didUpdate: true });
      })
      .catch((err) => {
        console.log('error', err);
      });

  }
  componentDidMount() {
    this.getStyles();
  }



  render() {
    if (!this.state.didUpdate) {
      return <p> Loading data...</p>;
    }
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
            displayStyles={this.state.displayStyle}
            productInfo={[this.props.displayProduct]}
          />
          <Tracker image ={this.state.displayStyle[0].photos[0].url} images ={this.state.displayStyle}/>
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
