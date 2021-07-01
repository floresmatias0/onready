const server = require('express').Router();
const { getAnimeDetails } = require('../../Controllers/animes/get.animes');
const { Anime } = require('../../db');

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

server.get('/search/:animeId', (req, res, next) => { 
    let { animeId } = req.params

    getAnimeDetails(animeId)
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