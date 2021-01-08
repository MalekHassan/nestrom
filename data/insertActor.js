'use strict';

const allData = require('./allData');
const actorSchema = require('../schemas/actor');

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

function gettingInduplicateActors(allActorsName) {
  var lookupObject = {};

  for (var i in allActorsName) {
    lookupObject[allActorsName[i]['name']] = allActorsName[i];
  }

  for (i in lookupObject) {
    // console.log(lookupObject[i].facebook_likes == null);
    if (typeof lookupObject[i].facebook_likes !== Number) {
      console.log(lookupObject[i]);
    }
    if (lookupObject[i].facebook_likes !== null) {
      actorsInduplicate.push(lookupObject[i]);
    }
  }
}
gettingTheNames();
gettingInduplicateActors(allActorsName);
// console.log(actorsInduplicate);

// constructors
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
const actor = new actorSchema(actorsInduplicate[0]);
console.log(actor);
async () => {
  console.log('added');
  await actor.save();
  console.log('added');
};
// actorsInduplicate.forEach((actor) => {});

// module.exports = actorsInduplicate;
