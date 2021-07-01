const { Anime } = require('../../db');

module.exports = {
    getAnimeDetails: async (animeId) =>{

        return await Anime.findOne({
            where:{
                id: animeId
            }
        })
        .then(details => details)
    },

}