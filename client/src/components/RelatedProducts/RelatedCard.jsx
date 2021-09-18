import React from 'react';
import './RP.css';
import Card from './Card.jsx';
import { Async } from 'react-async';



class RelatedCard extends React.Component {
  constructor(props) {
    super(props);
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
    if (this.props) {
      if (this.props.relatedCards) {

        return (
          <div className='card'>
            {this.props.relatedCards.map((product) => {
              return <Card productInfo={product}/>
            })}
          </div>

        );
      }
    }
    return <></>
  }

}

export default RelatedCard;