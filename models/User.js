const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema ({
    name: String,
    price: Number,
    type: String,
    brand: String,
});

module.exports = mongoose.model('User', UserSchema); 