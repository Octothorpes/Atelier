import React from 'react';
import '../../Ratings.css';


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
      Size: '',
      Width: '',
      Comfort: '',
      Quality: '',
      Length: '',
      Fit: ''
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
    }
  }


  render() {
    let characs = Object.keys(this.props.reviewsMeta.characteristics)
    let characsRender = characs.map((item, index) => {
      return (
        <div key={index} onClick={this.clickHandler}>
          <div>{this.state[item]}</div>
          <span>{item}: </span>
          <input type="radio" name={item} value="1"/>
          <label>1</label>
          <input type="radio" name={item} value="2"/>
          <label>2</label>
          <input type="radio" name={item} value="3"/>
          <label>3</label>
          <input type="radio" name={item} value="4"/>
          <label>4</label>
          <input type="radio" name={item} value="5"/>
          <label>5</label>
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

export default ModalCharacs;