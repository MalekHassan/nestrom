'use strict';

require('dotenv').config('.env');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;

const actorSchema = mongoose.Schema({
  name: { type: 'string', required: true },
  facebook_likes: { type: 'Number', required: true },
  age: { type: 'Number' },
  facebook_page_link: { type: 'string', required: true },
});

module.exports = mongoose.model('actor', actorSchema);
