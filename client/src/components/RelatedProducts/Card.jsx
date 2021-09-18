import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Card extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    console.log('TRIGGER CARD');
    const data = this.props.productInfo;
    console.log('CARD INFO ==== INFO ==== INFO ', data);
    return (
      <div className="related-category">{this.props.productInfo.data.category}
        <div className='card-itself'>
          <img
            className='default-image'
            // src={this.props.productInfo.url}
            alt={this.props.productInfo.name}
          />
        </div>
        <div className="related-name">{this.props.productInfo.data.name}</div>
        <div className="related-price">${this.props.productInfo.data.default_price}</div>
        <div className="related-rating">★★★☆☆</div>
        <br></br>
      </div>
    )



  }

}

export default Card;