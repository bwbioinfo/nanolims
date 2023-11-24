// Desc: Project model for mongoose
// Path: models/Projects.js

const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    // createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now },
});

const Projects = mongoose.model('Projects', projectSchema);

module.exports = Projects;
