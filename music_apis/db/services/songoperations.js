const { geoSearch } = require("../models/song");
const SongModel = require("../models/song");

const songOperations = {
    async add(songObject) {
        const result = await SongModel.create(songObject);
        console.log('Result is ', result);
        return result._id;
    },
    async readBySinger(singerName) {
        return await SongModel.find({ 'artistName': singerName });
    },
    async readByName(Name) {
        return await SongModel.find({ 'name': Name })
    },
    async readAll() {
        return await SongModel.find({});
    },
    async removeSong(Name) {
        const result = await SongModel.deleteOne({ 'name': Name });
        console.log('Result is', result);
        return result;
    }

}
module.exports = songOperations;