const server = require('express').Router();
const { getListMovies,getMovieDetails } = require('../../Controllers/movies/get.movies');
const { createMovie } = require('../../Controllers/movies/post.movies')
const { Movie } = require('../../db');

server.post('/', (req, res, next) => { 
    let {title} = req.body
    
    getListMovies(title)
    .then(movies => {
        res.status(202).json(movies);
    }) 
    .catch(error => {
        console.log(error)
        res.status(400).send(error)
    })
});

server.post('/create', (req, res, next) => { 
    let {title} = req.body;
    console.log(title)

    getListMovies(title)
    .then(movies => {
        console.log(movies)
        let arr = movies.Search

        for(let i = 0; i < arr.length; i++){
 
            getMovieDetails(arr[i].Title)
            .then(async(movie) => {
                await Movie.findOrCreate({
                    where:{
                        name: movie.name ? movie.name : "no tiene name asi que invento uno"
                    },
                    defaults:{
                        origin: movie.origin,
                        premiere: movie.premiere,
                        director: movie.director,
                        image: movie.image,
                        actors: movie.actors
                    }
                })
            }) 
        }

        res.status(202).json("movies creates")
    }).catch(err => {
        res.status(404).send(err.message)
    }) 
});

server.post('/create/form/movie', async(req, res, next) => { 
    let {name, origin, premiere, director, image, actors} = req.body;
    createMovie(name, origin, premiere, director, image, actors)
    .then(() => res.status(202).json("movie create"))
    .catch(err => res.status(404).send(err.message)) 
});



module.exports = server;