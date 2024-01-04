// pages/api/getProjects.js

// Importing the connectDB function for establishing a MongoDB connection
import connectDB from '@/utils/db'; 

// Importing the Projects model for MongoDB interaction
import Projects from '@/models/Projects'; 

// get all projects
export default async function getProjects(req, res) {
    // Checking if the HTTP request method is 'GET'
    if (req.method === 'GET') {
        try {
            // Connect to MongoDB using the connectDB function
            connectDB();

            // Find all projects
            const projects = await Projects.find();

            // Respond with a 200 status code and the projects data in JSON format
            res.status(200).json(projects);
        } catch (error) {
            // Log any errors that occur during the process
            console.error(error);
            // Respond with a 500 status code and an error message in JSON format
            res.status(500).json({ error: 'Server error' });
        }
    } else {
        // If the request method is not 'GET', respond with a 405 status code and an error message
        res.status(405).json({ error: 'Method not allowed' });
    }
}
