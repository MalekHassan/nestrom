'use strict';

const allData = require('./allData');
// const actorSchema = require('../schemas/director');

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
    // console.log(lookupObject[i].facebook_likes == null);
    if (typeof lookupObject[i].facebook_likes !== Number) {
      console.log(lookupObject[i]);
    }
    if (lookupObject[i].facebook_likes !== null) {
      directorInduplicate.push(lookupObject[i]);
    }
  }
}
gettingTheNames();
gettingInduplicateActors(allDirectorsName);
// console.log(directorInduplicate);
// console.log(allDirectorsName);

// constructors
function Director(details) {
  this.name = details.director_name;
  this.facebook_likes = details.actor_1_facebook_likes;
  this.age = 38;
  this.username = details.director_name;
  this.password = '1234566';
}
