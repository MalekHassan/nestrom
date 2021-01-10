'use strict';

require('dotenv').config('.env');
// const AWS = require('aws-sdk');
const mongoose = require('mongoose');
// const elasticsearch = require('elasticsearch');
// const mongoosastic = require('mongoosastic');
const PORT = process.env.PORT || 3000;

const directorSchema = mongoose.Schema({
  name: { type: 'string', es_indexed: true },
  facebook_likes: { type: 'Number', es_indexed: true },
  age: { type: 'Number', es_indexed: true },
  username: { type: 'string', es_indexed: true },
  password: { type: 'string', es_indexed: true },
});

// let esClient = new elasticsearch.Client({
//   host:
//     'https://elastic:wSdGjdmoISZe0QOLsQLHnGCq@7ef9aaa0844a4c6c9fdbd02e916b9b25.us-east-1.aws.found.io:9243',
//   requestTimeout: 60000,
//   keepAlive: false,
//   // connectionClass: require('http-aws-es'),
// });
// directorSchema.plugin(mongoosastic, {
//   esClient: esClient,
// });

module.exports = mongoose.model('director', directorSchema);
