import React from 'react';

class Tracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      images: this.props.images,
      defaultImage: this.props.image,
      defaultClass: 'imgGalleryContainer',
    };
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this);
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });

    console.log('X', this.state.x, 'y', this.state.y);
  }

  handleImageClick() {
    this.setState({ defaultClass: 'imgGalleryContainer-active' });
  }

  render() {
    return (
      <React.Fragment>
        <div
          className={this.state.defaultClass}
          onMouseMove={this.handleMouseMove}
          onClick={this.handleImageClick}>
          <img className={'default-view-image'} src={this.props.image}></img>
        </div>
        <div className='image-thumnails'>WORD DAWG</div>
      </React.Fragment>
    );
  }
}

export default Tracker;
