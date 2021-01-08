'use strict';

require('dotenv').config('.env');
const mongoose = require('mongoose');
const mongoosastic = require('mongoosastic');
const PORT = process.env.PORT || 3000;

const movieSchema = mongoose.Schema({
  title: { type: 'string' },
  duration: { type: 'integer ' },
  gross: { type: 'integer' },
  genres: { type: 'string' },
  num_voted_users: { type: 'integer' },
  cast_total_facebook_likes: { type: 'integer' },
  plot_keywords: { type: 'string' },
  imdb_link: { type: 'string' },
  num_user_for_reviews: { type: 'integer' },
  language: { type: 'string' },
  country: { type: 'string' },
  content_rating: { type: 'integer' },
  budget: { type: 'integer' },
  title_year: { type: 'string' },
  imdb_score: { type: 'integer' },
  aspect_ratio: { type: 'integer' },
  movie_facebook_likes: { type: 'integer' },
  actors: [{ type: 'string' }],
  director: { type: 'string' },
  color: { type: 'string' },
});

movieSchema.plugin(mongoosastic, {
  hosts: [`localhost:${PORT}`],
});

module.exports = mongoose.model('movies', movieSchema);
