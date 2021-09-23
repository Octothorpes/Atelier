import React from 'react';
import '../../Ratings.css';
import Fu from '../../../svgImages/FullStar.svg';
import Em from '../../../svgImages/EmptyStar.svg';


class ModalStars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starArray: [Em, Em, Em, Em, Em],
      grade: ''
    };

    this.starHandler = this.starHandler.bind(this);
  }

  starHandler(e) {
    const star = Number(e.target.getAttribute('index')) + 1;
    if (star === 1) { this.setState({starArray: [Fu, Em, Em, Em, Em], grade: 'Poor'}); }
    if (star === 2) { this.setState({starArray: [Fu, Fu, Em, Em, Em], grade: 'Fair'}); }
    if (star === 3) { this.setState({starArray: [Fu, Fu, Fu, Em, Em], grade: 'Average'}); }
    if (star === 4) { this.setState({starArray: [Fu, Fu, Fu, Fu, Em], grade: 'Good'}); }
    if (star === 5) { this.setState({starArray: [Fu, Fu, Fu, Fu, Fu], grade: 'Great'}); }
  }


  render() {
    let starRender = this.state.starArray.map((item, index) => (
      <img src={item} key={index} index={index} onClick={this.starHandler}/>
    ));

    return (
      <React.Fragment>
        {starRender}
        {this.state.grade}
      </React.Fragment>
    );
  }
}

export default ModalStars;