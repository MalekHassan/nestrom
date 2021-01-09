'use strict';

require('dotenv').config('.env');
const allData = require('./allData');
const actorSchema = require('../schemas/actor');
const directorSchema = require('../schemas/director');
const movieSchema = require('../schemas/movie');

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

// function to add the movies to the data base
async function AddingTheMovies() {
  let searchedDirector;
  for (let i = 0; i <= allData.length; i++) {
    searchedDirector = await directorSchema.find({
      name: allData[i].director_name,
    });
    allData[i].director = searchedDirector[0]._id; // add the ID  of the director to make a relation btw the schema
    allData[i].title = allData[i].movie_title; // renaming the title as the schema
    allData[i].imdb_link = allData[i].movie_imdb_link; // renaming the movie_imdb_link as the schema
    allData[i].genres = allData[i].genres.split('|'); // to get an array that contains all the genres
    allData[i].plot_keywords = allData[i].plot_keywords.split('|'); // to get an array that contains all the plot_keywords
    allData[i].actors = []; // To receive the date of the ID for the actors in a movie
    if (allData[i].actor_1_name) {
      let name = allData[i].actor_1_name;
      let searchedActor = await actorSchema.find({ name: name });
      if (searchedActor.length > 0)
        allData[i].actors.push(searchedActor[0]._id);
    }
    if (allData[i].actor_2_name) {
      let name = allData[i].actor_2_name;
      let searchedActor = await actorSchema.find({ name: name });
      if (searchedActor.length > 0)
        allData[i].actors.push(searchedActor[0]._id);
    }
    if (allData[i].actor_3_name) {
      let name = allData[i].actor_3_name;
      let searchedActor = await actorSchema.find({ name: name });
      if (searchedActor.length > 0)
        allData[i].actors.push(searchedActor[0]._id);
    }
    const movie = new movieSchema(allData[i]);
    await movie.save();
  }
}

// Invoke the function
AddingTheMovies();
