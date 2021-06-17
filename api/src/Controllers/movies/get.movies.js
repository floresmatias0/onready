  
const axios = require('axios')

module.exports = {
    getListMovies: async () =>{

        return await axios.get(`
        https://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=marvel
        `)
        .then(movies =>{
            return movies.data
        }).then((payload) => {
            return payload
        })
    },
    getMovieDetails: async (name) =>{

        return await axios.get(`
        https://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${name}
        `)
        .then(details =>{
            //LAS PELICULAS DEBEN CONTENER
            // Nombre.
            // País de origen.
            // Fecha de estreno.
            // Director.
            // Link de imagen de portada.
            // Reparto: Es una lista de actores donde cada uno consta de nombre y apellido.
            let data = details.data
            
            let objDetail = {
                name: data.Title,
                origin: data.Country,
                premiere: data.Released,
                director: data.Director,
                image: data.Poster,
                actors: data.Actors
            }

            return objDetail
        })
    },

}