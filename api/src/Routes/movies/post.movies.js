const server = require('express').Router();

server.post('/', (req, res, next) => { 
    // .then(movies => {
    //     res.status(202).json(movies);
    // }) 
    // .catch(error => {
    //     console.log(error)
    //     res.status(400).send(error)
    // })
});


module.exports = server;