'use strict';

require('dotenv').config('.env');
const mongoose = require('mongoose');
const elasticsearch = require('elasticsearch');
const Director = require('./director');
const Actor = require('./actor');
const mongoosastic = require('mongoosastic');
const PORT = process.env.PORT || 3000;

const movieSchema = mongoose.Schema({
  title: { type: 'string', es_indexed: true },
  duration: { type: 'Number', es_indexed: false },
  gross: { type: 'Number', es_indexed: false },
  genres: { type: Array, es_type: 'string', es_indexed: true },
  num_voted_users: { type: 'Number', es_indexed: false },
  cast_total_facebook_likes: { type: 'Number', es_indexed: false },
  plot_keywords: { type: Array, es_type: 'string', es_indexed: true },
  imdb_link: { type: 'string', es_indexed: false },
  num_user_for_reviews: { type: 'Number', es_indexed: false },
  language: { type: 'string', es_indexed: true },
  country: { type: 'string', es_indexed: true },
  content_rating: { type: 'string', es_indexed: false },
  budget: { type: 'Number', es_indexed: false },
  title_year: { type: 'string', es_indexed: false },
  imdb_score: { type: 'Number', es_type: 'float', es_indexed: true },
  aspect_ratio: { type: 'Number', es_indexed: false },
  movie_facebook_likes: { type: 'Number', es_indexed: false },
  actors: {
    type: Array,
    ref: 'actor',
    es_indexed: false,
    es_schema: Actor,
    es_select: '_id',
  },
  director: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'director',
    es_indexed: false,
    es_schema: Director,
    es_select: '_id',
  },
  color: { type: 'string', es_indexed: false },
});

let esClient = new elasticsearch.Client({
  host:
    'https://elastic:wSdGjdmoISZe0QOLsQLHnGCq@7ef9aaa0844a4c6c9fdbd02e916b9b25.us-east-1.aws.found.io:9243',
  // requestTimeout: 60000,
  // keepAlive: false,
  // connectionClass: require('http-aws-es'),
});
movieSchema.plugin(mongoosastic, {
  esClient: esClient,
});

module.exports = mongoose.model('movies', movieSchema);
