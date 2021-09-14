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
    return (
      <div className="related-products-frame">
        <RelatedLeft />
        <RelatedCard />
        <RelatedRight />
      </div>
    );
  }
}

export default OutfitProducts;