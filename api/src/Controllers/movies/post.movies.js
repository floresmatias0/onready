const { Movie } = require('../../db')

module.exports = {

    createMovie: async(name, origin, premiere, director, image, actors) => {
        return await Movie.findOrCreate({
            where:{
                name: name 
            },
            defaults:{
                origin: origin,
                premiere: premiere,
                director: director,
                image: image,
                actors: actors
            }
        })
    }
}