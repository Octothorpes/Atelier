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
      photoURL: '',
      getServerPhotos: []
    };

    this.photoClickHandler = this.photoClickHandler.bind(this);
    this.getServerPhotos = this.getServerPhotos.bind(this);
  }

  photoClickHandler(e) {
    this.setState({
      photoZoom: !this.state.photoZoom,
      photoURL: e.target.src
    });
    this.props.sendInteraction('Individual Review Tile');
  }

  getServerPhotos(arr) {
    this.setState({ getServerPhotos: arr });
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
          getServerPhotos={this.getServerPhotos}
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


export default HOC(ReviewsPhotos, 'Ratings & Reviews');