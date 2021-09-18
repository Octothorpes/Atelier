import React from 'react';
import './RP.css';
import RelatedLeft from './RelatedLeft.jsx';
import RelatedRight from './RelatedRight.jsx';
import RelatedCard from './RelatedCard.jsx';
import axios from 'axios';


class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: this.props.productId,
      relatedIds: [],
      relatedCards: [],
      isLoaded: false
    };
    console.log('Related Products props', this.props.productId);
  }

  componentDidMount() {



    let bodyRelated = this.props.formatBody(
      'GET',
      `/products/${this.props.productId}/related`,
      { count: 13, page: 2 }
    );
    /**
     1 Need realted array of product ids
     2 Traverse through array indexes and get results for each
     */
    console.log('BODY RELATED', bodyRelated);
    axios.post('/api/*', bodyRelated)
      .then((results) => {
        console.log('REALTED PRODUCTS RESULTS', results);
        //2 ==============
        var realtedArr = [];
        for (var i = 0; i < results.data.length; i++) {
          console.log('LOOP', results.data[i]);

          let getProds = this.props.formatBody(
            'GET',
            `/products/${results.data[i]}`
          );

          realtedArr.push(axios.post('/api/*', getProds));
        }
        Promise.all(realtedArr).then((resultRelated) => {
          console.log('RESULT RELATED', resultRelated);
          this.setState({
            relatedCards: [...resultRelated],
            isLoaded: true
          });
        });


      })
      .catch((err) => {
        console.error(err);
      });




  }



  render() {

    console.log('STATE RELATED CARDS', this.state.relatedCards);
    console.log('IS LOADED <><><><><><', this.state.isLoaded);
    if (this.state.isLoaded) {
      console.log('STATE RELATED CARDS AFTER', this.state.relatedCards);
      console.log('IS LOADED <><><><><>< AFTER', this.state.isLoaded);
      return (
        <div className="related-products-frame">
          <RelatedLeft />
          <RelatedCard relatedCards={this.state.relatedCards} />
          <RelatedRight />
        </div>
      );
    }
    return <></>;
  }
}

export default RelatedProducts;