var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('plothole_locs', new Schema({
    latitude: String,
    longitude: String,
    first_recorded: Date,
    last_recorded: Date,
    area: String,
    district: String,
    pincode: String,
    count: { 
        type: Number, 
        default: 1
    }
}));