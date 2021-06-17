const server = require('express').Router();
const { getListMovies,getMovieDetails } = require('../../Controllers/movies/get.movies')

server.get('/', (req, res, next) => { 

    getListMovies()
    .then(movies => {
        res.status(202).json(movies);
    }) 
    .catch(error => {
        console.log(error)
        res.status(400).send(error)
    })
});

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

module.exports = server;