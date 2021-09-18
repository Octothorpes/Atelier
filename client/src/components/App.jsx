/* eslint-disable camelcase */
import React from 'react';
import axios from 'axios';
import './App.css';
import RnR from './RnR/RnR.jsx';
import '../fa-icons/fa-icons.js';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import OutfitProducts from './RelatedProducts/OutfitProducts.jsx';
import QuestionsNAnswersContainer from './QnA/Questions&AnswersContainer.jsx';
import ProductDetailContainer from './ProductDetail/productDetailContainer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: 47421,
      displayProduct: {},
      didUpdate: false,
    };
    this.formatBody = this.formatBody.bind(this);
  }

  formatBody(method, apiRoute, params = {count: 50}, data = {}) {
    let bodyObj = {
      method: method,
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp${apiRoute}`,
      data: data,
      params: params,
      headers: { Authorization: '' },
    };

    return bodyObj;
  }

  componentDidMount() {
    // eslint-disable-next-line quotes
    let body = this.formatBody('GET', `/products/${this.state.productId}`);
    axios
      .post('/api/*', body)
      .then((results) => {
        console.log('results', results);
        this.setState({ displayProduct: results.data, didUpdate: true });
        console.log('this.state', this.state);
      })
      .catch((err) => {
        // console.log('error', err);
      });
  }

  render() {
    if (!this.state.didUpdate) {
      return <p>Loading content...</p>;
    }
    return (
      <React.Fragment>
        <div>
          <ProductDetailContainer
            productId={this.state.productId}
            displayProduct={this.state.displayProduct}
            formatBody={this.formatBody}
          />

          <h3 className="related-prod">Related products:<RelatedProducts productId={this.state.productId} formatBody={this.formatBody}/></h3>
          <h3 className="related-prod">OutfitProducts:</h3><OutfitProducts />

          <QuestionsNAnswersContainer />

          <RnR productID={this.state.productId} formatBody={this.formatBody} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
