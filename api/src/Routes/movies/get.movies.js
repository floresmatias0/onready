const server = require('express').Router();
const { getMovieDetails, getAnimesApi } = require('../../Controllers/movies/get.movies');
const {Anime} = require('../../db');


server.get('/detail/title/:name', (req, res, next) => { 
    let {name} = req.params

    getMovieDetails(name)
    .then(result => {
        console.log(result)
        res.status(202).json(result);
    }) 
    .catch(error => {
        console.log(error)
        res.status(400).send(error)
    })
});

server.get('/apiToDb', (req, res, next) => { 

    getAnimesApi()
    .then(result => {
        console.log(result)
        res.status(202).json(result);
    }) 
    .catch(error => {
        console.log(error)
        res.status(400).send(error)
    })
});

server.get('/', async(req, res, next) => { 

    await Anime.findAll()
    .then(result => {
        console.log(result)
        res.status(202).json(result);
    }) 
    .catch(error => {
        console.log(error)
        res.status(400).send(error)
    })
});

module.exports = server;