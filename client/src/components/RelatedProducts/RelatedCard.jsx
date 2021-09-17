import React from 'react';
import './RP.css';
import Card from './Card.jsx';
import { Async } from 'react-async';



class RelatedCard extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    // productInfo: this.props.relatedCards,
    // isLoaded: false
    //   [
    //     {
    //       id: 47425,
    //       campus: 'hr-rpp',
    //       name: 'Heir Force Ones',
    //       slogan: 'A sneaker dynasty',
    //       description: "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
    //       category: 'Kicks',
    //       default_price: '99.00',
    //       created_at: '2021-08-26T20:30:48.129Z',
    //       updated_at: '2021-08-26T20:30:48.129Z',
    //       url: 'https://i.ibb.co/Dgv2kkJ/sample.png'
    //     },
    //     {
    //       id: 47426,
    //       campus: 'hr-rpp',
    //       name: 'GAP',
    //       slogan: 'Change your look',
    //       description: "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    //       category: 'Sweater',
    //       default_price: '139.00',
    //       created_at: '2021-02-23T19:24:34.450Z',
    //       updated_at: '2021-02-23T19:24:34.450Z',
    //       url: 'https://i.ibb.co/Wxj3PyN/Sweater.png'
    //     },
    //     {
    //       id: 47427,
    //       campus: 'hr-rpp',
    //       name: 'GUESS',
    //       slogan: 'A sneaker dynasty',
    //       description: "I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
    //       category: 'Coat',
    //       default_price: '345.00',
    //       created_at: '2021-08-26T20:30:48.129Z',
    //       updated_at: '2021-08-26T20:30:48.129Z',
    //       url: 'https://i.ibb.co/Fwmt4zH/Coat.png'
    //     },
    //     {
    //       id: 47428,
    //       campus: 'hr-rpp',
    //       name: 'ZARA',
    //       slogan: 'A sneaker dynasty',
    //       description: "I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
    //       category: 'Watches',
    //       default_price: '599.00',
    //       created_at: '2021-08-26T20:30:48.129Z',
    //       updated_at: '2021-08-26T20:30:48.129Z',
    //       url: 'https://i.ibb.co/VD7qw8M/watch.png'
    //     }
    //   ],
    // };
    // this.setState({productInfo: this.props.relatedCards, isLoaded: true});
  }

  render() {

    console.log('CARD', this.props.relatedCards);

    // if (!Array.isArray(this.props.relatedCards)) {
    //   return (
    //     <div className='card'>
    //       No Related Products So far
    //     </div>
    //   );
    // }
    return (
      <div className='card'>
        {/* <Card productInfo={this.props.relatedCards} /> */}


        {/* {this.props.relatedCards.map((product) => { */}
        <Card productInfo={this.props.relatedCards}
          productInfoCategory={this.props.relatedCardsCategory}
          productInfoName={this.props.relatedCardsName}
          productInfoPrice={this.props.relatedCardsPrice}
          productInfoRatings={this.relatedCardsRatings}
        />;
        {/* })} */}
      </div>

    );

  }

}

export default RelatedCard;