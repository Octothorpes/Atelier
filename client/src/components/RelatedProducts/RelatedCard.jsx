import React from 'react';
import './RP.css';
import Card from './Card.jsx';


class RelatedCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('TRIGGER')
    console.log('RELATED CARD', this.props.relatedCards);

    const allCards = this.props.relatedCards.map((productInfo)=>{
      return <Card productInfo={productInfo}/>
    });
    return (
      <div>
        {allCards}
      </div>

    );

  }

}

export default RelatedCard;