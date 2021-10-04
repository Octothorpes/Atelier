import React from 'react';
import galleryModalStyles from './galleryModalStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import withInteractionsApi from '../HOC/withInteractionApi.jsx';
// import Zoom from './zoom.jsx';
import zoomStyles from './zoomStyles.css';
import InnerImageZoom from 'react-inner-image-zoom';

class GalleryModal extends React.Component {
  constructor(props) {
    super(props);
    let image = this.props.selectedPhotos[this.props.selectedIndex].url;

    this.state = {
      expanded: false,
      zoomed: false,
      image,
      selectedPhotos: this.props.selectedPhotos,
      selectedIndex: this.props.selectedIndex,
      min: 0,
      max: this.props.selectedPhotos.length - 1,
    };

  }


  // componentDidMount() {
  //   this.setState({ selectedIndex: this.props.selectedIndex });
  // }
  render() {
    return (
      <React.Fragment>
        <div
          id='expandedImage'
          className='expanded-image-modal'
          style={
            this.props.expanded ? { display: 'block' } : { display: 'none' }
          }>
          <div className='expanded-image-overlay'>
            <button
              className='expanded-image-close-modal'
              onClick={(e) => {
                this.props.sendInteraction('Image Gallery Expanded View');
                this.props.displayModal(e);
              }}>
              close modal
            </button>
            <button
              onClick={(e) => {
                this.props.sendInteraction('Image Gallery Expanded View');
                this.props.arrowClick(e);
              }}
              id='expanded-left-arrow'
              className='expanded-image-left-arrow'
              style={
                this.props.selectedIndex === 0
                  ? { visibility: 'hidden' }
                  : { visibility: 'visible' }
              }>
              <FontAwesomeIcon
                id='expanded-left-arrow'
                role='button'
                icon='arrow-left'
              />
            </button>
            <button
              onClick={(e) => {
                this.props.sendInteraction('Image Gallery Expanded View');
                this.props.arrowClick(e);
              }}
              id='expanded-right-arrow'
              className='expanded-image-right-arrow'
              style={
                this.props.selectedIndex === this.state.max
                  ? { visibility: 'hidden' }
                  : { visibility: 'visible' }
              }>
              <FontAwesomeIcon
                id='expanded-right-arrow'
                role='button'
                icon='arrow-right'
              />
            </button>

            {/* {this.state.zoomed ? (
              <div className='expanded-image-container'>
                <img
                  onClick={this.testZoom}
                  id={this.props.selectedIndex}
                  className='expanded-image_image'
                  src={this.props.image}></img>
              </div>
            ) : (
              <div className='expanded-image-container'>
                <Zoom src={this.props.image} />
              </div>
            )} */}

            <div className='expanded-image-container'>
              <InnerImageZoom
                alt={`${this.props.defaultStyle} At Image number ${this.props.selectedIndex +1}`}
                id={this.props.selectedIndex}
                className='expanded-image_image'
                zoomScale={2.5}
                // zoomSrc={this.props.image}
                src={this.props.image}
              />
            </div>
            <div className='expanded-image-icon-container'>
              {this.props.selectedPhotos.map((photos, i) => {
                return (
                  <button
                    className='expanded-image-icon-button'
                    onClick={(e) => {
                      this.props.sendInteraction('Image Gallery Expanded View');
                      this.props.thumbnailClick(e);
                    }}
                    id={i}
                    key={i}>
                    <span
                      key={i}
                      id={i}
                      className={
                        i === this.props.selectedIndex ? 'dot-active' : 'dot'
                      }></span>

                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default withInteractionsApi(GalleryModal, 'Product Detail');
/*
 <FontAwesomeIcon icon={['far', 'star']} />
*/
