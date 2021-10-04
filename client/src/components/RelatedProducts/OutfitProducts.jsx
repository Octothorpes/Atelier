import React from 'react';
import './RP.css';
import RelatedLeft from './RelatedLeft.jsx';
import RelatedRight from './RelatedRight.jsx';
import RelatedCard from './RelatedCard.jsx';

class OutfitProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    if (this.props.validProduct.length === 0) {
      return (
        <React.Fragment></React.Fragment>
      );
    }
    return (
      <div className="related-products-frame spaceForQnA">
        <RelatedLeft />
        <RelatedCard />
        <RelatedRight />
      </div>
    );
  }
}

export default OutfitProducts;