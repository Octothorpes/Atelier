import React from 'react';
import './Reviews.css';

class ReviewsPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: this.props.photos,
      photoZoom: false,
    };

    this.photoClickHandler = this.photoClickHandler.bind(this);
  }

  photoClickHandler() {
    console.log('photo click test');
    this.setState({ photoZoom: !this.state.photoZoom });
  }

  render() {
    let photos;

    if (!this.state.photoZoom) {
      photos = this.props.photos.map((item, index) => {
        // if (index !== 0) { return; }
        return (
          <img id="smallImage" src={item.url} onClick={this.photoClickHandler} key={item.id}/>
        );
      });
    } else {
      photos = this.props.photos.map((item) => (
        <img id="modalImage" src={item.url} key={item.id} onClick={this.photoClickHandler}/>
      ));
    }



    return (
      <React.Fragment>
        {photos}
      </React.Fragment>
    );
  }
}


export default ReviewsPhotos;