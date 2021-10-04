import React from 'react';
import './RP.css';
import RelatedLeft from './RelatedLeft.jsx';
import RelatedRight from './RelatedRight.jsx';
import RelatedCard from './RelatedCard.jsx';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log('RP', this.props.relatedProd);

    if (this.props.validProduct.length === 0) {
      return (
        <React.Fragment></React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <div id="relatedProds">RELATED PRODUCTS</div>
        <div className="related-products-frame">
          <RelatedLeft />
          <RelatedCard relatedProd={this.props.relatedProd}/>
          <RelatedRight />
        </div>
      </React.Fragment>
    );
  }
}

export default RelatedProducts;