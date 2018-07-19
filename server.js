var express = require("express");
var app = express();

const cors = require('cors');
const bodyParser = require('body-parser');
const stores = require('./controllers/stores');

const corsOptions = {
    origin: 'https://www.olgafomin.com',
    methods: 'POST',
    allowedHeaders: 'Content-Type',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/stores', cors(corsOptions), (req, res) => { stores.fetchStores(req, res)});

// make connection to localhost in order to make request to Yelp API
var server = app.listen(3000, 'localhost', function () {
    console.log("Listening on port %s...", server.address().port);
});