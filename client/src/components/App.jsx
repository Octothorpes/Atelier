import React from 'react';
import './App.css';
import '../fa-icons/fa-icons.js';
import QuestionsNAnswersContainer from './QnA/Questions&AnswersContainer.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <h1>Welcome to FEC Project Atelier</h1>
        <div>
          <QuestionsNAnswersContainer />
        </div>

      </React.Fragment>
    );
  }
}

export default App;
