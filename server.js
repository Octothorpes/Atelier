const path = require('path');
const express = require('express');
const config = require('./.config');
const TOKEN = config.token;
const axios = require('axios');
const _ = require('underscore');

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/client/dist')));
// other configuration...

// Router handler for processing api endpoints
app.all('/api/*', (req, res) => {
  let base = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';
  let method = req.method;
  let url = req.url.substring(4);
  let query = req.query;
  base += url;
  let options = {
    method: req.method,
    url: base,
    headers: { Authorization: TOKEN },
    data: req.body
  };

  axios(options)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

// Router handler for url change
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/dist/index.html'));
});


app.listen(port, () => {
  console.log(`Express Server is running on port ${port}`);
});
