const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserModel = new Schema({
    firstName: {
        type: String,
        default: null
    },
    lastName: {
        type: String,
        default: null
    },
    email: {
        type: String,
        default: null
    },
    phone: {
        type: String,
        default: null
    },
    address: {
        type: String,
        default: null
    },
    password: {
        type: String,
        default: null
    },
},);
const user = mongoose.model('user', UserModel);
module.exports = user;