var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('plothole_locs', new Schema({
    latitude: String,
    longitude: String,
    first_recorded: String,
    last_recorded: String,
    count: Number
}));