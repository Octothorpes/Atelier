import React from 'react';
import './Reviews.css';

class ReviewsPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: this.props.photos
    };
  }


  render() {
    const photos = this.state.photos.map((item) => {
      return (
        <img id="images" src={item.url} key={item.id}/>
      );
    });

    return (
      <React.Fragment>
        {photos}
      </React.Fragment>
    );
  }
}


export default ReviewsPhotos;