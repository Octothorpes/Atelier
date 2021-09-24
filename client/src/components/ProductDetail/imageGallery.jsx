import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GalleryModal from './galleryModal.jsx';

class Tracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
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
    let id = this.props.selectedThumbIndex;
    var element = document.getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'start',
    });
  }

  render() {
    return (
      <React.Fragment>
        {/* <GalleryModal thumbnailClick ={this.props.thumbnailClick} image={this.props.image} selectedPhotos={this.props.selectedPhotos} selectedIndex={this.props.selectedThumbIndex}/> */}
        <div className='icon-buttons-container'>
          <button
            onClick={this.props.arrowClick}
            className='icon-buttons'
            id='left-arrow'
            style={
              this.props.selectedThumbIndex === 0
                ? { visibility: 'hidden' }
                : { visibility: 'visible' }
            }>
            <FontAwesomeIcon id='left-arrow' icon='arrow-left' />{' '}
          </button>
          <button
            onClick={this.props.arrowClick}
            className='icon-buttons'
            id='right-arrow'
            style={
              this.props.selectedThumbIndex ===
              this.props.selectedPhotos.length - 1
                ? { visibility: 'hidden' }
                : { visibility: 'visible' }
            }>
            <FontAwesomeIcon id='right-arrow' icon='arrow-right' />
          </button>{' '}
        </div>
        <div className={this.state.defaultClass}>
          <img onClick={this.props.displayModal} className={'default-view-image'} src={this.props.image}></img>
        </div>

        <div className='image-thumbnails'>
          <button
            onClick={this.props.arrowClick}
            id='arrow-up'
            className='chevron'>
            <FontAwesomeIcon id='arrow-up' icon='chevron-up' />{' '}
          </button>
          {this.props.selectedPhotos.map((photo, i) => {
            return (
              <img
                onClick={this.props.thumbnailClick}
                className='thumbnails'
                style={
                  i === this.props.selectedThumbIndex
                    ? {
                      borderBottom: '4px solid green',
                      backgroundColor: 'white',
                      opacity: '.5',
                      boxShadow: '0px 12px 22px 1px #333',
                    }
                    : { borderBottom: 'none' }
                }
                key={i}
                id={i}
                src={photo.thumbnail_url}></img>
            );
          })}

          <button
            onClick={this.props.arrowClick}
            id='arrow-down'
            className='chevron'>
            <FontAwesomeIcon id='arrow-down' icon='chevron-down' />
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Tracker;
