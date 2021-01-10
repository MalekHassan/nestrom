'use strict';

require('dotenv').config('.env');
const mongoose = require('mongoose');
const elasticsearch = require('elasticsearch');
const mongoosastic = require('mongoosastic');
const PORT = process.env.PORT || 3000;

const directorSchema = mongoose.Schema({
  name: { type: 'string', es_indexed: true },
  facebook_likes: { type: 'Number', es_indexed: true },
  age: { type: 'Number', es_indexed: true },
  username: { type: 'string', es_indexed: true },
  password: { type: 'string', es_indexed: true },
});

let esClient = new elasticsearch.Client({
  host: 'http://localhost:9200',
  requestTimeout: 60000,
  keepAlive: false,
});
directorSchema.plugin(mongoosastic, {
  esClient: esClient,
});

module.exports = mongoose.model('director', directorSchema);
