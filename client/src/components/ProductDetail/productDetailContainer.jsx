import React from 'react';
import ProductDetailStyles from './ProductDetailStyles.css';
import SearchBar from './searchBar.jsx';
class productDetailContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayProduct: this.props.displayProduct,
    };
  }
  componentDidMount() {
    this.setState({ displayProduct: this.props.displayProduct }, () => {
      console.log('container', this.state);
    });
  }

  render() {
    return (
      <div className='product-detail-container'>
        <SearchBar />
      </div>
    );
  }
}

export default productDetailContainer;
