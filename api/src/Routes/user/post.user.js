const server = require('express').Router();
const { User } = require('../../db.js');


server.get('/new', (req, res, next) => { 
    User.create()
    .then(users => {
        res.send(users);
    }) 
    .catch(error => {
        console.log(error)
        res.status(400).send(error)
    })
});

module.exports = server;