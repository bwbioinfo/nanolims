// Consumables model for MongoDB
// Path: models/Consumables.js

const mongoose = require('mongoose');

const consumableSchema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, default: 0 },
    description: { type: String },
    createdAt: { type: Date, default: Date.now },
});

const Consumable = mongoose.model('Consumable', consumableSchema);

module.exports = Consumable;
