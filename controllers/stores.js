'use strict';

const yelp = require('yelp-fusion');

const fetchStores = (req, res) => {
  const zip = req.body.location;
  const apiKey = 'my_api_key';
  const client = yelp.client(apiKey);

  client.search({
      term: 'store',
      location: zip,
      categories: 'candy,chocolate,jpsweets',
      limit: '10',
      radius: '3200'
    }).then(response => {
      res.send(response.jsonBody);
    }).catch(error => {
      console.log('Could not fetch data from Yelp: ', error);
    });
}

module.exports = {
    fetchStores: fetchStores
}