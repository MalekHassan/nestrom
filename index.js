'use strict';

require('dotenv').config('.env');
// constants
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const MONGODB_URI =
  process.env.MONGODB_URI ||
  'mongodb+srv://nestrom-playground:Ma@12345678@nestrom.00d8t.mongodb.net/nestrom-playground?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3000;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

mongoose.connection.once('open', () => {
  app.listen(PORT, () => {
    console.log(`we are listening to ${PORT}`);
  });
});
