import React from 'react';
import './Reviews.css';

class ReviewsPhotos extends React.Component {
  render() {
    const photos = this.props.photos;
    let photoRender;

    if (photos.length > 0) {
      photoRender = photos.map((item, index) => {
        return (
          <p key={index}>
            <img src={item.url} alt={item.id} />
          </p>
        );
      });
    }

    return (
      <React.Fragment>
        {photoRender}
      </React.Fragment>
    );
  }
}

export default ReviewsPhotos;