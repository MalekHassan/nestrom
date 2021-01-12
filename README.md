# Notesy

## Author:Malek Hassan Hasan Al-Dalal'ah

## Overview

I have created a NodeJs server and connect it with the cloud mongo database,this server has CRUDs RESTful APIs for all schemas.

- In this assignment I have Created a **NodeJS** server with **express framework** to deal with the external requests, because we have to deal with a **RESTful API** and this application is connected with a cloud on **Atlas-MongoDB** and the schemas for this cloud has been created using mongoose.

- The data for this application was provided in _CSV_, So after changing the data from _CSV_ to _JSON_ data type a script has been made to fill the schemas for the _ACTORS_,_DIRECTORS_ and _MOVIES_ and there are relations between Movies schema , Actors and Directors.

- To improve the searching properties for the data base I connected it with _elastic-search_ method and I have used _mongoosastic_ and _elastic-search_ library to index my schemas to be able to be used in the searching.

- for the elastic search there is a routes to search movies by title, genres, and plot keywords, to get movies count by language, country and IMDB score and Route to get all movies with the ability to filter them by genres and plot-keywords which _under-construct_.

## Prerequisites

- Operating system: Mac OS, Windows, Linux
- Git Follow the instruction in the links below to install git in your machine
  Windows
  Mac OS
  Linux
- Codeing Editor

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Installation

- open your terminal

- Clone the repo

- git clone https://github.com/MalekHassan/nestrom

- Write `npm i` in your terminal to download all the dependencies

## Usage

- Make your own ATLAS mongoDB and add it in the `.env` file under the name of **MONGODB_URI**.
- Write in your terminal `node data/node data/insertActor.js` to add the data for the Actors.(note that this command could take some time)
- Write in your terminal `node data/node data/inseartDirector.js` to add the data for the Directors. (note that this command could take some time)
- Write in your terminal `node data/node data/insertMovies.js` to add the data for the Movies. (note that this command could take much time)
- Run the server and the beast is ready to go.
