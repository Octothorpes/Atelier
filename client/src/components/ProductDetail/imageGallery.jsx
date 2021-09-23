import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Tracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      images: this.props.images,
      defaultImage: this.props.image,
      defaultClass: 'imgGalleryContainer',
      expanded: false,
    };
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }

  handleMouseLeave(e) {
    this.state.expanded
      ? this.setState({ defaultClass: 'imgGalleryContainer', expanded: false })
      : null;
  }
  mouseEnter(e) {
    this.setState({
      defaultClass: 'imgGalleryContainer-active',
      expanded: true,
    });
  }
  handleImageClick() {
    this.setState({
      defaultClass: 'imgGalleryContainer-active',
      expanded: true,
    });
    // let thumnails = this.props.sortedStyles.map((style) => {
    //   return <img src={style.photos[0].thumnail_url}></img>;
    // });
    console.log('-----', this.props.checkedId, this.props.selectedPhotos);
  }

  render() {
    return (
      <React.Fragment>
        <div className='chevron-container'>
          <button className='chevron'>
            <FontAwesomeIcon icon='chevron-up' />{' '}
          </button>
          <button className='chevron'>
            <FontAwesomeIcon icon='chevron-down' />
          </button>{' '}
        </div>

        <div className='icon-buttons-container'>
          <button className='icon-buttons'>
            <FontAwesomeIcon icon='arrow-left' />{' '}
          </button>
          <button className='icon-buttons'>
            <FontAwesomeIcon icon='arrow-right' />
          </button>{' '}
        </div>
        <div
          onMouseLeave={this.handleMouseLeave}
          className={this.state.defaultClass}
          // onMouseMove={this.handleMouseMove}
        >
          <img
            onClick={this.handleImageClick}
            className={'default-view-image'}
            src={this.props.image}></img>
        </div>

        <div className='image-thumbnails'>
          {this.props.selectedPhotos.map((photo, i) => {
            return (
              <img
                onClick={this.props.thumbnailClick}
                className='thumbnails'
                key={i}
                id={i}
                src={photo.thumbnail_url}></img>
            );
          })}
          {/* <img className='thumbnails' src={this.props.selectedPhotoThumb}></img>
          <img className='thumbnails' src={this.props.selectedPhotoThumb}></img> */}
        </div>
      </React.Fragment>
    );
  }
}

export default Tracker;
