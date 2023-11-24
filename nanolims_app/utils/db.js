// Filename: db.js

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Replace 'your-mongodb-uri' with your actual MongoDB URI
        const mongoURI = process.env.MONGO_URI;

        await mongoose.connect(mongoURI);

        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
