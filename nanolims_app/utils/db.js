// Filename: db.js

// Importing the 'mongoose' library for MongoDB interactions
import mongoose from 'mongoose';

// Defining an asynchronous function named 'connectDB' for connecting to MongoDB
const connectDB = async () => {
    try {
        // Retrieving the MongoDB URI from environment variables
        const mongoURI = process.env.MONGO_URI;

        // Validating that the MongoDB URI is provided
        if (!mongoURI) {
            throw new Error('MongoDB URI is missing. Please set the MONGO_URI environment variable.');
        }

        // Logging the MongoDB URI to the console for debugging purposes
        console.log('Connecting to MongoDB:', mongoURI);

        // Attempting to establish a connection to MongoDB using Mongoose
        await mongoose.connect(mongoURI, {
            // Additional options can be added here
        });

        // Logging a success message to the console if the connection is successful
        console.log('Connected to MongoDB');
    } catch (error) {
        // Handling errors that may occur during the connection attempt
        console.error('Error connecting to MongoDB:', error.message);
        // Exiting the process with a failure status code
        process.exit(1);
    }
};

// Exporting the 'connectDB' function to make it accessible in other parts of the application
export default connectDB;
