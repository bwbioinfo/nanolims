// Desc: User model for MongoDB
// Path: models/Users.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true},
    lastname: { type: String, required: false},
    email: { 
        type: String,
        required: [true, 'Please enter an email'], 
        unique: [true, 'Email already exists'],
    },
    ssoId: { type: String },
    ssoProvider: { type: String },
    createdAt: { type: Date, default: Date.now },
});

mongoose.models = {}

const User = mongoose.model('User', userSchema);

module.exports = User;
