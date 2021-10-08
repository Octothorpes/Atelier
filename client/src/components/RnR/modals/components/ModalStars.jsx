import React from 'react';
import '../modals.css';
import Fu from '../../../svgImages/FullStar.svg';
import Em from '../../../svgImages/EmptyStar.svg';
import dFu from '../../../svgImages/dFullStar.svg';
import dEm from '../../../svgImages/dEmptyStar.svg';


class ModalStars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starArray: [Em, Em, Em, Em, Em],
      starArrayDark: [dEm, dEm, dEm, dEm, dEm],
      grade: 'None Selected'
    };

    this.starHandler = this.starHandler.bind(this);
  }

  starHandler(e) {
    const star = Number(e.target.getAttribute('index')) + 1;

    let nightShift = false;
    if (this.props.nightShift === 'nightShiftOn') { nightShift = true; }

    if (nightShift) {
      if (star === 1) { this.setState({starArrayDark: [dFu, dEm, dEm, dEm, dEm], grade: 'Poor'}); }
      if (star === 2) { this.setState({starArrayDark: [dFu, dFu, dEm, dEm, dEm], grade: 'Fair'}); }
      if (star === 3) { this.setState({starArrayDark: [dFu, dFu, dFu, dEm, dEm], grade: 'Average'}); }
      if (star === 4) { this.setState({starArrayDark: [dFu, dFu, dFu, dFu, dEm], grade: 'Good'}); }
      if (star === 5) { this.setState({starArrayDark: [dFu, dFu, dFu, dFu, dFu], grade: 'Great'}); }
    } else {
      if (star === 1) { this.setState({starArray: [Fu, Em, Em, Em, Em], grade: 'Poor'}); }
      if (star === 2) { this.setState({starArray: [Fu, Fu, Em, Em, Em], grade: 'Fair'}); }
      if (star === 3) { this.setState({starArray: [Fu, Fu, Fu, Em, Em], grade: 'Average'}); }
      if (star === 4) { this.setState({starArray: [Fu, Fu, Fu, Fu, Em], grade: 'Good'}); }
      if (star === 5) { this.setState({starArray: [Fu, Fu, Fu, Fu, Fu], grade: 'Great'}); }
    }

    this.props.starClick();
    this.props.onChangeHandler('rating', star);
  }


  render() {
    let nightShift = false;
    if (this.props.nightShift === 'nightShiftOn') { nightShift = true; }
    let starRender;

    if (nightShift) {
      starRender = this.state.starArrayDark.map((item, index) => (
        <img className="modalStarsBig" src={item} key={index} index={index} name="modalStars" onClick={this.starHandler} />
      ));
    } else {
      starRender = this.state.starArray.map((item, index) => (
        <img className="modalStarsBig" src={item} key={index} index={index} name="modalStars" onClick={this.starHandler} />
      ));
    }


    return (
      <React.Fragment>
        <div onClick={this.props.onClickHOC}>{starRender}</div>
        <p id="modalStarGrade">{this.state.grade}</p>
      </React.Fragment>
    );
  }
}

export default ModalStars;