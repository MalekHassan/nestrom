'use strict';

require('dotenv').config('.env');
const mongoose = require('mongoose');
const mongoosastic = require('mongoosastic');
const PORT = process.env.PORT || 3000;

const directorSchema = mongoose.Schema({
  name: { type: 'string' },
  facebook_likes: { type: 'integer ' },
  age: { type: 'integer' },
  username: { type: 'string' },
  password: { type: 'string' },
});

directorSchema.plugin(mongoosastic, {
  hosts: [`localhost:${PORT}`],
});

module.exports = mongoose.model('movies', directorSchema);
