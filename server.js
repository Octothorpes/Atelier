const path = require('path');
const express = require('express');
const config = require('./.config');
const TOKEN = config.token;
const axios = require('axios').default;
const _ = require('underscore');
const multer = require('multer');
const { indexOf } = require('underscore');

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/client/dist')));

// other configuration...
const PHOTO_UPLOAD_FOLDER = path.join(__dirname, '/client/UploadedPhotos');
app.use(express.static(PHOTO_UPLOAD_FOLDER));
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, PHOTO_UPLOAD_FOLDER);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

// router for handling valid products url string
app.get('/detailState/*', async (req, res) => {
  let base = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';
  console.log(req.url, req.params);
  base += `/${req.params['0']}`;

  let indexOfProductId = req.params['0'].indexOf('/');
  let productId = req.params['0'].slice(indexOfProductId + 1);

  console.log('PRODID', req.body);
  let optionsReviews = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=${productId}`,
    headers: { Authorization: TOKEN },
  };
  let optionsReviewsMeta = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta?product_id=${productId}`,
    headers: { Authorization: TOKEN },
  };

  let optionsDetail = {
    method: req.method,
    url: base,
    headers: { Authorization: TOKEN },
    data: req.body,
  };
  let optionsStyle = {
    method: req.method,
    url: `${base}/styles`,
    headers: { Authorization: TOKEN },
    data: req.body,
  };
  const detailRequest = axios(optionsDetail);
  const styleRequest = axios(optionsStyle);
  const reviewsRequest = axios(optionsReviews);
  const reviewsRequestMeta = axios(optionsReviewsMeta);

  try {
    let result = await detailRequest;
    let result2 = await styleRequest;
    let result3 = await reviewsRequest;
    let result4 = await reviewsRequestMeta;
    let detail = result.data;
    let style = result2.data;
    let reviews = result3.data;
    let meta = result4.data;

    res.send([detail, style, reviews, meta]);
  } catch (err) {
    res.send(err);
  }
});
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
    data: req.body,
  };

  axios(options)
    .then((results) => {
      // console.log('IN HERE', results.data);
      // console.log('======================');
      res.status(results.status).send(results.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

// Router for storing photos uploaded by user
app.post('/photos', upload.array('photos', 5), (req, res) => {
  res.status(201).send('Successful');
});

// Router handler for url change
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/dist/index.html'));
});

app.listen(port, () => {
  console.log(`Express Server is running on port ${port}`);
});
