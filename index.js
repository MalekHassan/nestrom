'use strict';

require('dotenv').config('.env'); //To use the .env file

// constants
const actorSchema = require('./schemas/actor');
const directorSchema = require('./schemas/director');
const movieSchema = require('./schemas/movie');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const app = express();
const MONGODB_URI =
  process.env.MONGODB_URI ||
  'mongodb+srv://nestrom-playground:Ma@12345678@nestrom.00d8t.mongodb.net/nestrom-playground?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3000;

// connect mongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// Updating requirements
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.get('/allActors', getAllActors);
app.get('/Actor/:id', getAnActor);
app.get('/allDirector', getAllDirector);
app.get('/Director/:id', getAnDirector);
app.get('/allMovies', getAllMovies);
app.get('/Movie/:id', getAmovie);
app.patch('/editActor/:id', updateActor);
app.put('/editActor/:id', updateActor);
app.delete('/deleteActor/:id', deleteActor);
app.patch('/editDirector/:id', updateDirector);
app.put('/editDirector/:id', updateDirector);
app.delete('/deleteDirector/:id', deleteDirector);
app.patch('/editMovie/:id', updateMovie);
app.put('/editMovie/:id', updateMovie);
app.delete('/deleteMovie/:id', deleteMovie);

// function

// getting all actors
async function getAllActors(req, res) {
  let allActors = await actorSchema.find();
  res.status(200).json({ allActors });
}

// Getting An actor with an ID
async function getAnActor(req, res) {
  console.log(req.params.id);
  let searchedActor = await actorSchema.find({ _id: req.params.id });
  res.status(200).json({ searchedActor });
}

// getting all Director
async function getAllDirector(req, res) {
  let allDirector = await directorSchema.find();
  res.status(200).json({ allDirector });
}

// getting an Director with his ID
async function getAnDirector(req, res) {
  let searchedDirector = await directorSchema.find({ _id: req.params.id });
  res.status(200).json({ searchedDirector });
}

// getting All movies
async function getAllMovies(req, res) {
  let allMovies = await movieSchema.find();
  res.status(200).json({ allMovies });
}

// getting a movie with an ID
async function getAmovie(req, res) {
  let searchedMovies = await movieSchema.find({ _id: req.params.id });
  res.status(200).json({ searchedMovies });
}

// Update an Actor
async function updateActor(req, res) {
  console.log(req.body);
  let { name, facebook_likes, age, facebook_page_link } = req.body;
  let updatedProduct = { name, facebook_likes, age, facebook_page_link };
  let searchedActor = await actorSchema.findByIdAndUpdate(
    req.params.id,
    updatedProduct,
    { new: true }
  );
  res.status(200).json({ searchedActor });
}

// Delete an Actor
async function deleteActor(req, res) {
  let deleteActor = await actorSchema.findByIdAndDelete(req.params.id);
  res.status(200).json({ deleteActor });
}

// Update an Director
async function updateDirector(req, res) {
  console.log(req.body);
  let {
    name,
    facebook_likes,
    age,
    facebook_page_link,
    username,
    password,
  } = req.body;
  let updatedDirector = {
    name,
    facebook_likes,
    age,
    facebook_page_link,
    username,
    password,
  };
  let searchedDirector = await directorSchema.findByIdAndUpdate(
    req.params.id,
    updatedDirector,
    { new: true }
  );
  res.status(200).json({ searchedDirector });
}

// Delete a Director
async function deleteDirector(req, res) {
  let deleteDirector = await directorSchema.findByIdAndDelete(req.params.id);
  res.status(200).json({ deleteDirector });
}

// Update a Movie
async function updateMovie(req, res) {
  console.log(req.body);
  let {
    title,
    duration,
    gross,
    genres,
    num_voted_users,
    cast_total_facebook_likes,
    plot_keywords,
    imdb_link,
    num_user_for_reviews,
    language,
    country,
    content_rating,
    budget,
    title_year,
    imdb_score,
    aspect_ratio,
    movie_facebook_likes,
    actors,
    director,
    color,
  } = req.body;
  let updatedMovie = {
    title,
    duration,
    gross,
    genres,
    num_voted_users,
    cast_total_facebook_likes,
    plot_keywords,
    imdb_link,
    num_user_for_reviews,
    language,
    country,
    content_rating,
    budget,
    title_year,
    imdb_score,
    aspect_ratio,
    movie_facebook_likes,
    actors,
    director,
    color,
  };
  let searchedMovie = await MovieSchema.findByIdAndUpdate(
    req.params.id,
    updatedMovie,
    { new: true }
  );
  res.status(200).json({ searchedMovie });
}

// Delete a Movie
async function deleteMovie(req, res) {
  let deleteMovie = await movieSchema.findByIdAndDelete(req.params.id);
  res.status(200).json({ deleteMovie });
}
// connect the server deleteActor
mongoose.connection.once('open', () => {
  app.listen(PORT, () => {
    console.log(`we are listening to ${PORT}`);
  });
});
