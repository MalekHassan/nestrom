'use strict';

require('dotenv').config('.env');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

const directorSchema = mongoose.Schema({
  name: { type: 'string', es_indexed: true },
  facebook_likes: { type: 'Number', es_indexed: true },
  age: { type: 'Number', es_indexed: true },
  username: { type: 'string', es_indexed: true },
  password: { type: 'string', es_indexed: true },
});

module.exports = mongoose.model('director', directorSchema);
