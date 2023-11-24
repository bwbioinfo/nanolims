// Desc: Equipment model for the MongoDB
// Path: models/Equipment.js

const mongoose = require('mongoose');

const equipmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    status: { type: String, enum: ['Available', 'In Use', 'Under Maintenance'], default: 'Available' },
    createdAt: { type: Date, default: Date.now },
});

const Equipment = mongoose.model('Equipment', equipmentSchema);

module.exports = Equipment;
