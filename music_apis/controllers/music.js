const songOperations = require("../db/services/songoperations");

const musicOperations = {
    async getAllSongs(request, response){
        const songs = await songOperations.readAll();
        response.json(songs);
    },
    async getByArtist(request, response){
        const singerName = request.query.name;
        const songs = await songOperations.readBySinger(singerName);
        response.json(songs);
    },
    async addASong(request, response){
        console.log(request.body);
        const result  = await songOperations.add(request.body);
        response.json(result);
    },
    async removeASong(request,response){
        const songName = request.query.name;
        const result= await songOperations.removeSong(songName);
        response.json(result);
    },
    async searchSong(request,response){
        const name = request.query.name;
        let result =await songOperations.readBySinger(name);
        if(result.length===0)
        {
             result = await songOperations.readByName(name);
        }
        response.json(result);
    },
    getPartySongs(request, response){

    },
    getLatestSongs(request, response){

    }
    
}
module.exports = musicOperations;