import React from 'react';
import '../modals.css';
import HOC from '../../../HOC/withInteractionApi.jsx';


class ModalCharacs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: {
        Size: {
          '1': 'A size too small',
          '2': '½ a size too small',
          '3': 'Perfect',
          '4': '½ a size too big',
          '5': 'A size too wide'
        },
        Width: {
          '1': 'Too narrow',
          '2': 'Slightly narrow',
          '3': 'Perfect',
          '4': 'Slightly wide',
          '5': 'Too wide'
        },
        Comfort: {
          '1': 'Uncomfortable',
          '2': 'Slightly uncomfortable',
          '3': 'Ok',
          '4': 'Comfortable',
          '5': 'Perfect'
        },
        Quality: {
          '1': 'Poor',
          '2': 'Below average',
          '3': 'What I expected',
          '4': 'Pretty great',
          '5': 'Perfect'
        },
        Length: {
          '1': 'Runs short',
          '2': 'Runs slightly short',
          '3': 'Perfect',
          '4': 'Runs slightly long',
          '5': 'Runs long'
        },
        Fit: {
          '1': 'Runs tight',
          '2': 'Runs slightly tight',
          '3': 'Perfect',
          '4': 'Runs slightly long',
          '5': 'Runs long'
        },
      },
      Size: 'None selected',
      Width: 'None selected',
      Comfort: 'None selected',
      Quality: 'None selected',
      Length: 'None selected',
      Fit: 'None selected'
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    if (e.target.value) {
      let name = e.target.name;
      let radioNum = e.target.value;
      let answer = {};
      answer[name] = this.state.rating[name][radioNum];
      this.setState( answer );

      let characsIDs = this.props.reviewsMeta.characteristics;
      let countOfCharacs = Object.keys(characsIDs).length;
      let data = {};
      let key = characsIDs[e.target.name].id;
      this.props.characObj[key] = Number(e.target.value);
      if (Object.keys(this.props.characObj).length === countOfCharacs) {
        this.props.onChangeHandler('characteristics', this.props.characObj);
      }
    }
    this.props.sendInteraction('Write New Review');
  }


  render() {
    let characs = Object.keys(this.props.reviewsMeta.characteristics);
    let characsRender = characs.map((item, index) => {
      return (
        <div className="modalCharacteristics" key={index} onClick={this.clickHandler}>
          <p className="modalCharacItem">{item}: </p>
          <div>
            <label className="modalCharacsNum">1</label>
            <input className="modalRadios" type="radio" name={item} value="1" required/>
            <label className="modalCharacsNum">2</label>
            <input className="modalRadios" type="radio" name={item} value="2"/>
            <label className="modalCharacsNum">3</label>
            <input className="modalRadios" type="radio" name={item} value="3"/>
            <label className="modalCharacsNum">4</label>
            <input className="modalRadios" type="radio" name={item} value="4"/>
            <label className="modalCharacsNum">5</label>
            <input className="modalRadios" type="radio" name={item} value="5"/>
          </div>
          <span className="modalCharacsWords">{this.state[item]}</span>
        </div>
      );
    });

    return (
      <React.Fragment>
        {characsRender}
      </React.Fragment>
    );
  }
}

export default HOC(ModalCharacs, 'Ratings & Reviews');