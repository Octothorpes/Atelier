import React from 'react';
import './Reviews.css';
import HOC from '../HOC/withInteractionApi.jsx';
import ImageModal from './modals/ImageModal.jsx';

class ReviewsPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: this.props.photos,
      photoZoom: false,
      photoURL: ''
    };

    this.photoClickHandler = this.photoClickHandler.bind(this);
  }

  photoClickHandler(e) {
    this.props.sendInteraction('smallImage');
    this.setState({
      photoZoom: !this.state.photoZoom,
      photoURL: e.target.src
    });
  }

  render() {
    let photos;

    if (!this.state.photoZoom) {
      photos = this.props.photos.map((item, index) => {
        // if (index !== 0) { return; }
        return (
          <img
            id="smallImage"
            src={item.url}
            onClick={this.photoClickHandler}
            key={item.id}
          />
        );
      });
    } else {
      photos = this.props.photos.map((item) => (
        <ImageModal
          show={this.state.photoZoom}
          hide={this.photoClickHandler}
          photo={this.state.photoURL}
          key={item.id}
        />
      ));
    }



    return (
      <React.Fragment>
        {photos}
      </React.Fragment>
    );
  }
}


export default HOC(ReviewsPhotos, 'RnR');