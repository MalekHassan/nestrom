'use strict';

require('dotenv').config('.env');
const mongoose = require('mongoose');
// const mongoosastic = require('mongoosastic');
const PORT = process.env.PORT || 3000;

const actorSchema = mongoose.Schema({
  name: { type: 'string', required: true },
  facebook_likes: { type: 'integer', required: true },
  age: { type: 'integer' },
  facebook_page_link: { type: 'string', required: true },
});

// actorSchema.plugin(mongoosastic, {
//   hosts: [`localhost:${PORT}`],
// });

module.exports = mongoose.model('movies', actorSchema);
