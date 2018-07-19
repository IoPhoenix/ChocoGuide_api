'use strict';

const yelp = require('yelp-fusion');

const fetchStores = (req, res) => {
        const { parameters } = req.body;
        const apiKey = 'my_api_key';
        const client = yelp.client(apiKey);

    client.search({
        term:'store',
        location: parameters.location,
        categories: 'candy,chocolate',
        limit: '10',
        radius: '3200'
      }).then(response => {
        const firstResult = response.jsonBody.businesses;
        const prettyJson = JSON.stringify(firstResult, null, 4);
        res.json(prettyJson);
      }).catch(e => {
        console.log(e);
      });
}

module.exports = {
    fetchStores: fetchStores
}