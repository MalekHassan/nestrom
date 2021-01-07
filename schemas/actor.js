'use strict';

require('dotenv').config('.env');
const mongoose = require('mongoose');
const mongoosastic = require('mongoosastic');
const PORT = process.env.PORT || 3000;

const actorSchema = mongoose.Schema({
  name: { type: 'string' },
  facebook_likes: { type: 'integer ' },
  age: { type: 'integer' },
  facebook_page_link: { type: 'string' },
});

actorSchema.plugin(mongoosastic, {
  hosts: [`localhost:${PORT}`],
});

module.exports = mongoose.model('movies', actorSchema);
