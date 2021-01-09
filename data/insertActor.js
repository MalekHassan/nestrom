'use strict';

require('dotenv').config('.env');
const allData = require('./allData');
const actorSchema = require('../schemas/actor');

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
let allActorsName = [];
let actorsInduplicate = [];

// Functions
function gettingTheNames() {
  allData.forEach((movie) => {
    allActorsName.push(new ActorOne(movie));
    allActorsName.push(new ActorTow(movie));
    allActorsName.push(new ActorThree(movie));
  });
}

// Making sure that there is no duplicated actors
function gettingInduplicateActors(allActorsName) {
  var lookupObject = {};

  for (var i in allActorsName) {
    lookupObject[allActorsName[i]['name']] = allActorsName[i];
  }

  for (i in lookupObject) {
    if (lookupObject[i].facebook_likes !== null) {
      actorsInduplicate.push(lookupObject[i]);
    }
  }
}

// Invoke the function
gettingTheNames();
gettingInduplicateActors(allActorsName);

// constructors to get the data as an object
function ActorOne(details) {
  this.name = details.actor_1_name;
  this.facebook_likes = details.actor_1_facebook_likes;
  this.age = 38;
  this.facebook_page_link = 'www.facebook.com';
}

function ActorTow(details) {
  this.name = details.actor_2_name;
  this.facebook_likes = details.actor_2_facebook_likes;
  this.age = 38;
  this.facebook_page_link = 'www.facebook.com';
}

function ActorThree(details) {
  this.name = details.actor_3_name;
  this.facebook_likes = details.actor_3_facebook_likes;
  this.age = 38;
  this.facebook_page_link = 'www.facebook.com';
}

// Adding data to the data base
function addingActors() {
  actorsInduplicate.forEach((element) => {
    const actor = new actorSchema(element);
    actor.save();
  });
}

// Invoke function
addingActors();
