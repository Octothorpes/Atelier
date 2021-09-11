import React from 'react';

class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="individual-question">
        <div className="question-header">
          <p style={{fontSize: '16px', fontWeight: 'bold'}}>Q: Who what which when where why whether how? </p>
          <div className="question-info">
            <p>Helpful?<a><span style={{textDecoration: 'underline', marginLeft: '10px'}}>Yes</span>(25)</a></p>
            <p style={{marginLeft: '10px', marginRight: '8px'}}>|</p>
            <p style={{textDecoration: 'underline'}}>Add Answer</p>
          </div>

        </div>
        <div className="answers">
          <p style={{fontWeight: 'bold', marginRight: '5px'}}>A:</p>
          <p className="answer-body">
          It is a long established fact that a reader will be distracted
          by the readable content of a page when looking at its layout.
          </p>
        </div>
      </div>
    );
  }
}

export default Question;