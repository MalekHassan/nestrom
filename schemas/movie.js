'use strict';

require('dotenv').config('.env');
const mongoose = require('mongoose');
// const mongoosastic = require('mongoosastic');
const PORT = process.env.PORT || 3000;

const movieSchema = mongoose.Schema({
  title: { type: 'string' },
  duration: { type: 'Number' },
  gross: { type: 'Number' },
  genres: { type: [] },
  num_voted_users: { type: 'Number' },
  cast_total_facebook_likes: { type: 'Number' },
  plot_keywords: { type: [] },
  imdb_link: { type: 'string' },
  num_user_for_reviews: { type: 'Number' },
  language: { type: 'string' },
  country: { type: 'string' },
  content_rating: { type: 'string' },
  budget: { type: 'Number' },
  title_year: { type: 'string' },
  imdb_score: { type: 'Number' },
  aspect_ratio: { type: 'Number' },
  movie_facebook_likes: { type: 'Number' },
  actors: { type: [], ref: 'actor' },
  director: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'director',
    required: true,
  },
  color: { type: 'string' },
});

// movieSchema.plugin(mongoosastic, {
//   hosts: [`localhost:${PORT}`],
// });

module.exports = mongoose.model('movies', movieSchema);
