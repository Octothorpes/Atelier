const path = require('path');
const express = require('express');
const config = require('./config');
const token = config.token;
const apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';
const axios = require('axios');
const _ = require('underscore');

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/client/dist')));
// other configuration...


app.post('/api/*', (req, res)=>{
  console.log('body', req.body);

  let options = req.body;
  options.headers.Authorization = token;


  axios(options).then((results)=>{
    console.log('API Results:', results.data);
    res.send(results.data);
  }).catch((err)=>{
    console.log('API Error:', err);
    res.send(err);
  });


});




app.listen(port, () => {
  console.log(`Express Server is running on port ${port}`);
});