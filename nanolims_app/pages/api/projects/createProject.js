// pages/api/createProject.js

// Importing the connectDB function for establishing a MongoDB connection
import connectDB from '@/utils/db'; 

// Importing the Projects model for MongoDB interaction
import Projects from '@/models/Projects'; 

// Exporting an asynchronous function named 'handler' to handle HTTP requests
export default async function handler(req, res) {
    // Checking if the HTTP request method is 'POST'
    if (req.method === 'POST') {
        try {
            // Connect to MongoDB using the connectDB function
            connectDB();

            // Create a new project entry using data from the request body
            const newProject = new Projects({
                name: req.body.name,
                description: req.body.description,
                createdBy: req.body.createdBy, // Assuming createdBy is the user ID
            });

            // Save the new project to the database
            const savedProject = await newProject.save();

            // Respond with a 201 status code and the saved project data in JSON format
            res.status(201).json(savedProject);
        } catch (error) {
            // Log any errors that occur during the process
            console.error(error);
            // Respond with a 500 status code and an error message in JSON format
            res.status(500).json({ error: 'Server error' });
        }
    } else {
        // If the request method is not 'POST', respond with a 405 status code and an error message
        res.status(405).json({ error: 'Method not allowed' });
    }
}
