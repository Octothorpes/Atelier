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

  // componentDidMount() {

  // }

  render() {
    console.log('RP', this.props.relatedProd);
    return (
      <div className="related-products-frame">
        <RelatedLeft />
        <RelatedCard relatedProd={this.props.relatedProd}/>
        <RelatedRight />
      </div>
    );
  }
}

export default RelatedProducts;