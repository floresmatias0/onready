const { Anime } = require('../../db')
const axios = require('axios')

module.exports = {
    apiToDb: async () => {
        return await axios.get(`
        https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=400
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
    }
}