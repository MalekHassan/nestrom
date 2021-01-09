'use strict';

require('dotenv').config('.env');
const mongoose = require('mongoose');
// const mongoosastic = require('mongoosastic');
const PORT = process.env.PORT || 3000;

const directorSchema = mongoose.Schema({
  name: { type: 'string' },
  facebook_likes: { type: 'Number' },
  age: { type: 'Number' },
  username: { type: 'string' },
  password: { type: 'string' },
});

// directorSchema.plugin(mongoosastic, {
//   hosts: [http://localhost:9200],
// });

module.exports = mongoose.model('director', directorSchema);
