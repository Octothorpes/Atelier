import React from 'react';
import './RP.css';
import Card from './Card.jsx';



class RelatedCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo:
        [
          {
            id: 47425,
            campus: 'hr-rpp',
            name: 'Heir Force Ones',
            slogan: 'A sneaker dynasty',
            description: "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
            category: 'Kicks',
            default_price: '99.00',
            created_at: '2021-08-26T20:30:48.129Z',
            updated_at: '2021-08-26T20:30:48.129Z',
            url: 'https://i.ibb.co/Dgv2kkJ/sample.png'
          },
          {
            id: 47426,
            campus: 'hr-rpp',
            name: 'GAP',
            slogan: 'Change your look',
            description: "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
            category: 'Sweater',
            default_price: '139.00',
            created_at: '2021-02-23T19:24:34.450Z',
            updated_at: '2021-02-23T19:24:34.450Z',
            url: 'https://i.ibb.co/Wxj3PyN/Sweater.png'
          },
          {
            id: 47427,
            campus: 'hr-rpp',
            name: 'GUESS',
            slogan: 'A sneaker dynasty',
            description: "I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
            category: 'Coat',
            default_price: '345.00',
            created_at: '2021-08-26T20:30:48.129Z',
            updated_at: '2021-08-26T20:30:48.129Z',
            url: 'https://i.ibb.co/Fwmt4zH/Coat.png'
          },
          {
            id: 47428,
            campus: 'hr-rpp',
            name: 'ZARA',
            slogan: 'A sneaker dynasty',
            description: "I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
            category: 'Watches',
            default_price: '599.00',
            created_at: '2021-08-26T20:30:48.129Z',
            updated_at: '2021-08-26T20:30:48.129Z',
            url: 'https://i.ibb.co/VD7qw8M/watch.png'
          }
        ],

    };
  }

  render() {

    // console.log('CARD', this.props.relatedProd);

    if (!this.state.productInfo) {
      return (
        <div className='card'>
          No Related Products So far
        </div>
      );
    }
    return (
      <div className='card'>
        {this.state.productInfo.map((productInfo) => (
          <Card key={productInfo.id} productInfo={productInfo} />
        ))}
      </div>


      // <div className='card'>
      //   <p>Category name: {this.props.relatedProd.category}</p>
      //   <p>Name: {this.props.relatedProd.name}</p>
      //   <p>Price: {this.props.relatedProd.default_price}</p>
      //   <p>Rating: ★★★☆☆</p>
      // </div>

    );
  }

}

export default RelatedCard;