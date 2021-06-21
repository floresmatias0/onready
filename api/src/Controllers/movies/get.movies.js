const axios = require('axios');
const {Anime} = require('../../db');

module.exports = {
    getAnimesApi: async () =>{
        return await axios.get(`
        https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0
        `)
        .then(async(animes) =>{
            let arr = animes.data.data;
            for(let i = 0; i < arr.length; i++){
                console.log(arr[i].attributes.titles.en)
                await Anime.findOrCreate({
                    where:{
                        name: arr[i].attributes.titles.en || arr[i].attributes.titles.en_jp
                    },
                    defaults:{
                        origin: arr[i].attributes.startDate,
                        finish: arr[i].attributes.endDate,
                        status: arr[i].attributes.status,
                        image: arr[i].attributes.posterImage,
                        coverImage: arr[i].attributes.coverImage,
                        totalEpisodes: arr[i].attributes.totalLength,
                        idYoutube: arr[i].attributes.youtubeVideoId,
                    }
                })
            }
        })
    },
    getMovieDetails: async (name) =>{

        return await axios.get(`
        https://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${name}
        `)
        .then(details =>{
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