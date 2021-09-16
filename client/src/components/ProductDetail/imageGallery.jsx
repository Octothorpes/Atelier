import React from 'react';

class Tracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      images: this.props.images,
      defaultImage: this.props.image,
    };
    this.handleMouseMove = this.handleMouseMove.bind(this);

  }

  handleMouseMove(event) {
    this.setState({ x: event.clientX, y: event.clientY });
  }

  render() {
    return (
      <div className='imgGalleryContainer' onMouseMove={this.handleMouseMove}>
        <img className='default-view-image' src={this.state.defaultImage}></img>
      </div>
    );
  }
}

export default Tracker;
