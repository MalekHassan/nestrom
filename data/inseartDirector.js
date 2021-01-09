'use strict';

require('dotenv').config('.env');
const allData = require('./allData');
const directorSchema = require('../schemas/director');

// connecting dataBase
const mongoose = require('mongoose');
const MONGODB_URI =
  process.env.MONGODB_URI ||
  'mongodb+srv://nestrom-playground:Ma@12345678@nestrom.00d8t.mongodb.net/nestrom-playground?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// General Decelerations
let allDirectorsName = [];
let directorInduplicate = [];

// Functions
function gettingTheNames() {
  allData.forEach((movie) => {
    allDirectorsName.push(new Director(movie));
  });
}

function gettingInduplicateActors(allDirectorsName) {
  var lookupObject = {};

  for (var i in allDirectorsName) {
    lookupObject[allDirectorsName[i]['name']] = allDirectorsName[i];
  }

  for (i in lookupObject) {
    if (lookupObject[i].facebook_likes !== null) {
      directorInduplicate.push(lookupObject[i]);
    }
  }
}

// Invoke the function
gettingTheNames();
gettingInduplicateActors(allDirectorsName);

// constructors to get the data as an object
function Director(details) {
  this.name = details.director_name;
  this.facebook_likes = details.actor_1_facebook_likes;
  this.age = 38;
  this.username = details.director_name;
  this.password = '1234566';
}

// saving to the database
function addingDirector() {
  directorInduplicate.forEach((element) => {
    const director = new directorSchema(element);
    director.save();
  });
}

// Invoke the function
addingDirector();
