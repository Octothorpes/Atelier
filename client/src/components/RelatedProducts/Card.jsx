import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>Category:{this.props.productInfo.category}
        <div className='card-itself'>
          <img
            className='default-image'
            src={this.props.productInfo.url}
            alt={this.props.productInfo.name}
          />
        </div>
        <div>Name: {this.props.productInfo.name}</div>
        <div>Price: {this.props.productInfo.default_price}</div>
        <div>Rating: ★★★☆☆</div>
        <br></br>
      </div>
    );
  }

}

export default Card;