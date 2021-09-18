import React from 'react';
import './Reviews.css';

let ReviewsRateDate = function(props) {
  let date = new Date(props.date.slice(0, 10));
  let starAndMonthTile = {
    '0': '☆☆☆☆☆', 'Jan': 'January', 'Jul': 'July',
    '1': '★☆☆☆☆', 'Feb': 'February', 'Aug': 'August',
    '2': '★★☆☆☆', 'Mar': 'March', 'Sep': 'September',
    '3': '★★★☆☆', 'Apr': 'April', 'Oct': 'October',
    '4': '★★★★☆', 'May': 'May', 'Nov': 'November',
    '5': '★★★★★', 'Jun': 'June', 'Dec': 'December'
  };

  date = date.toString().slice(4, 15);
  date = `${starAndMonthTile[date.slice(0, 3)]} ${date.slice(4, 6)}, ${date.slice(-4)}`;

  return (
    <React.Fragment>
      <p>
        {starAndMonthTile[props.stars]}
      </p>
      <p id="usernameDate">
        {props.username}, {date}
      </p>
    </React.Fragment>
  );
};

export default ReviewsRateDate;