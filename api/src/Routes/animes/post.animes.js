const server = require('express').Router();
const { apiToDb } = require('../../Controllers/animes/post.animes');

server.post('/create', (req, res, next) => { 
    
    apiToDb()
    .then(() => {
        res.status(202).json("se crearon nuevos animes en tu base de datos");
    }) 
    .catch(error => {
        console.log(error)
        res.status(400).send(error)
    })
});


module.exports = server;