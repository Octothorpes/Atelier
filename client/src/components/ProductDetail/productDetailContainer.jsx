import React from 'react';
import ProductDetailStyles from './ProductDetailStyles.css';
import SearchBar from './searchBar.jsx';
import ProductDescriptionAndFeatures from './productDescriptionAndFeatures.jsx';
import ProductInformation from './productInformation.jsx';
class productDetailContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: this.props.productId,
    };
  }
  componentDidMount() {
    // this.setState({ displayProduct: this.props.displayProduct }, () => {
    console.log('PROPS', this.props);
  }

  render() {
    return (
      <div className='product-detail-container'>
        <SearchBar />
        <div>
          {' '}
          Announcment message place holder! = sale/dicount offer -- new product
          highlight{' '}
        </div>

        <ProductInformation />
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
