const { Router } = require('express');

//Importamos los routers
const user = require('./user/user');
const createUser = require('./user/post.user');

const getMovies = require('./movies/get.movies');

const router = Router();

// Configuramos los routers
router.use('/users', user);
router.use('/users', createUser);


router.use('/movies', getMovies);


module.exports = router;