const express = require('express');
const musicOperations = require('../controllers/music');
const routes = express.Router();
routes.get('/singer',musicOperations.getByArtist);
routes.get('/allsongs',musicOperations.getAllSongs);
routes.get('/search',musicOperations.searchSong);
routes.post('/addSong', async (request, response)=>{
    let songObject = request.body;
    const songOperations = require('../db/services/songoperations');
    let result = await songOperations.add(songObject);
   // response.json({message:result});
   if(result && result._id){
    response.status(200).json({message:'Song Successfully Added'});
   }
   else{
    response.status(200).json({message: 'Unable To Add Song'});
   }
});
routes.delete('/removeSong', async (request, response)=>{
    let songObject = request.body.name;
    console.log(songObject);
    const songOperations = require('../db/services/songoperations');
    let result = await songOperations.removeSong(songObject);
   // response.json({message:result});
   if(result.deletedCount){
    response.status(200).json({message:'Song Successfully Removed'});
   }
   else{
    response.status(200).json({message: 'Unable To Find Song'});
   }
});
module.exports = routes;
