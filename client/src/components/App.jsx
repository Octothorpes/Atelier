/* eslint-disable camelcase */
import React from 'react';
import axios from 'axios';
import './App.css';
import RnR from './RnR/RnR.jsx';
import '../fa-icons/fa-icons.js';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import OutfitProducts from './RelatedProducts/OutfitProducts.jsx';
import QuestionsNAnswersContainer from './QnA/QuestionsNAnswersContainer.jsx';
import ProductDetailContainer from './ProductDetail/productDetailContainer.jsx';
import DefaultState from './defaultState';
//=====SVG Images=====//
import EmptyStar from './svgImages/EmptyStar.svg';
import FullStar from './svgImages/FullStar.svg';
import HalfStar from './svgImages/HalfStar.svg';
import OneQStar from './svgImages/OneQStar.svg';
import ThreeQStar from './svgImages/ThreeQStar.svg';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 47425,
      displayProduct: DefaultState.displayProduct,
      displayStyles: DefaultState.diplayStyles,
      reviews: DefaultState.reviews,
      ratings: DefaultState.reviewsMeta,
      questionList: DefaultState.questionList,
      didUpdate: false,
      productRating: .5,
      productRatingStars: []
    };
    this.formatBody = this.formatBody.bind(this);
    this.starRatingRender = this.starRatingRender.bind(this);
  }

  formatBody(method, apiRoute, params = {}, data = {}) {
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
    let totalReviewCount = DefaultState.reviews.count;
    const starRatingObj = DefaultState.reviewsMeta.ratings;
    let starRating = 0; let vals = 0;
    if (starRatingObj) {
      vals = Object.values(starRatingObj);
      vals = vals.reduce((prev, cur) => (Number(prev) + Number(cur)));
      for (let key in starRatingObj) {
        starRating += Number(key) * Number(starRatingObj[key]);
      }
    }
    const starRatingGenerator = this.starRatingRender(starRating / vals);
    starRating = Math.round(starRating / vals * 10) / 10;

    this.setState({
      productRating: starRating,
      productRatingStars: starRatingGenerator
    });
  }

  starRatingRender(rating) {
    let result = []; let count = 0;
    rating = (Math.round(rating * 4) / 4).toFixed(2);
    while (count !== 5) {
      if (rating >= 1) {
        result.push(FullStar); rating -= 1; count += 1;
      } else if (rating === .5) {
        result.push(HalfStar); rating -= .5; count += 1;
      } else if (rating === .75) {
        result.push(ThreeQStar); rating -= .75; count += 1;
      } else if (rating === .25) {
        result.push(OneQStar); rating -= .25; count += 1;
      } else {
        result.push(EmptyStar); count += 1;
      }
    }
    return result;
  }

  // componentDidMount() {
  //   // eslint-disable-next-line quotes
  //   let body = this.formatBody('GET', `/products/${this.state.productId}`);
  //   axios
  //     .post('/api/*', body)
  //     .then((results) => {
  //       console.log('results', results);
  //       this.setState({ displayProduct: results.data, didUpdate: true });
  //       console.log('this.state', this.state);
  //     })
  //     .catch((err) => {
  //       console.log('error', err);
  //     });
  // }

  render() {

    return (
      <React.Fragment>
        <div>
          <ProductDetailContainer
            productId={this.state.productId}
            displayProduct={this.state.displayProduct}
            displayStyles={this.state.displayStyles}
            formatBody={this.formatBody}
          />

          <h3 className='related-prod'>
            Related products:
            <RelatedProducts relatedProd={this.state.displayProduct} />
          </h3>
          <h3 className='related-prod'>OutfitProducts:</h3>
          <OutfitProducts />

          <QuestionsNAnswersContainer formatBody={this.formatBody}/>

          <RnR
            productID={this.state.productId}
            formatBody={this.formatBody}
            productRating={this.state.productRating}
            productStars={this.state.productRatingStars}
            starGenerator={this.starRatingRender}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
