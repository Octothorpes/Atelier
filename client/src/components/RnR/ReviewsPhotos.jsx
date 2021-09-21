import React from 'react';
import './Reviews.css';
import Modal from './ReviewsTest.jsx';

class ReviewsPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: this.props.photos,
      photoZoom: false,
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.photoClickHandler = this.photoClickHandler.bind(this);
  }

  showModal() { this.setState({ show: true }); }

  hideModal() { this.setState({ show: false }); }

  photoClickHandler() {
    console.log('photo click test');
    this.setState({ photoZoom: !this.state.photoZoom });
  }

  render() {
    let photos;

    if (!this.state.show) {
      photos = this.state.photos.map((item, index) => {
        // if (index !== 0) { return; }
        return (
          <img id="smallImage" src={this.state.photos[0].url} onClick={this.showModal} key={item.id}/>
        );
      });
    }
    // else {
    //   photos = this.state.photos.map((item) => (
    //     <img id="modalImage" src={this.state.photos[0].url} key={item.id} onClick={this.photoClickHandler}/>
    //   ));
    // }



    return (
      <React.Fragment>
        <div>
          <main>
            <Modal show={this.state.show} handleClose={this.hideModal}>
              <p>test</p>
              {photos}
            </Modal>
          </main>
        </div>
      </React.Fragment>
    );
  }
}


export default ReviewsPhotos;