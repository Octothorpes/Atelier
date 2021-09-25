import React from 'react';

class ErrorMessage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p style={{color: 'red'}}>You must enter the following:</p>
      </div>
    );
  }
}

export default ErrorMessage;