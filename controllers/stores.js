'use strict';

const yelp = require('yelp-fusion');

const fetchStores = (req, res) => {
    const zip = req.body.location;
    const apiKey = 'my_api_key';
    const client = yelp.client(apiKey);

client.search({
    term:'store',
    location: zip,
    categories: 'candy,chocolate',
    limit: '10',
    radius: '3200'
  }).then(response => {
    res.send(response.jsonBody);
  }).catch(e => {
    console.log(e);
  });
}

module.exports = {
    fetchStores: fetchStores
}