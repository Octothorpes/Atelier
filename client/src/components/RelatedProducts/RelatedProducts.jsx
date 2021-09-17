import React from 'react';
import './RP.css';
import RelatedLeft from './RelatedLeft.jsx';
import RelatedRight from './RelatedRight.jsx';
import RelatedCard from './RelatedCard.jsx';
import axios from 'axios';
import {useAsync} from 'react-async';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: this.props.productId,
      relatedIds: [],
      relatedCards: [],
      isLoaded: false
      //didUpdate: false,
      // products: []
    };
    this.getRelated = this.getRelated.bind(this);
    console.log('Related Products props', this.props.productId);
  }

  getRelated() {
    let bodyRelated = this.props.formatBody(
      'GET',
      `/products/${this.props.productId}/related`,
      { count: 13, page: 2 }
    );

    axios
      .post('/api/*', bodyRelated)
      .then((results) => {
        console.log('Related RESULTS', results);
        this.setState({ relatedIds: results.data });
        console.log('RELATED----------IDS', this.state.relatedIds);

        for (var i = 0; i < this.state.relatedIds.length; i++) {

          console.log('VALUE', this.state.relatedIds[i]);
          let getProducts = this.props.formatBody(
            'GET',
            `/products/${this.state.relatedIds[i]}/`
          );
          axios
            .post('/api/*', getProducts)
            .then((productsData) => {
              console.log('PRODUCTS---DATA FOR CARDS--->', productsData);

              this.setState({ relatedCards: [...this.state.relatedCards, productsData], isLoaded: true}); // push into Array
              console.log('PRODUCTS ARR>', this.state.relatedCards);
            })
            .catch((err) => { console.log('error', err); });
        }
      })
      .catch((err) => {
        console.log('error', err);
      });
    console.log('BODY------', bodyRelated);

  }


  componentDidMount() {
    this.getRelated();

  }




  render() {

    // console.log('RELATED IDS STATE', this.state.relatedIds);
    if (this.state.isLoaded) {

      const data = this.state.relatedCards;
      console.log('CHECK CARDS INFO', data[0].data);
      return (
        <div className="related-products-frame">
          <RelatedLeft />
          {/* <RelatedCard productInfo={this.state.products}/> */}
          {/* <RelatedCard relatedIds={this.state.relatedIds} /> */}
          {this.state.relatedCards.map((product) => {
            return <RelatedCard
              relatedCards={[this.state.relatedCards]}
              relatedCardsCategory={product.data.category}
              relatedCardsName={product.data.name}
              relatedCardsPrice={product.data.default_price}
              relatedCardsRatings={product.data.description}
            />;
          })}
          <RelatedRight />
        </div>
      );

    } else {
      return <></>;
    }
  }



}

export default RelatedProducts;