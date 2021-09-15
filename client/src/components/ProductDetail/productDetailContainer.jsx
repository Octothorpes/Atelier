import React from 'react';
import ProductDetailStyles from './ProductDetailStyles.css';
import SearchBar from './searchBar.jsx';
import ProductDescriptionAndFeatures from './productDescriptionAndFeatures.jsx';
import ProductInformation from './productInformation.jsx';
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
        console.log('results', results);
        this.setState({ displayStyle: results.data.results, didUpdate: true });
        console.log('this.state', this.state);
      })
      .catch((err) => {
        console.log('error', err);
      });
    console.log('body------', body);
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
        <div>
          {' '}
          Announcment message place holder! = sale/dicount offer -- new product
          highlight{' '}
        </div>

        <ProductInformation
          productId={this.props.productId}
          displayStyles={this.state.displayStyle}
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
