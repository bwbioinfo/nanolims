// pages/api/createEntry.js

import connectDB from '@/utils/db'; // Adjust the path as needed
import Projects from '@/models/Projects'; // Adjust the path as needed

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            // Connect to MongoDB
            connectDB();

            // Create a new project entry
            const newProject = new Projects({
                name: req.body.name,
                description: req.body.description,
                createdBy: req.body.createdBy, // Assuming createdBy is the user ID
            });

            // Save the new project to the database
            const savedProject = await newProject.save();

            res.status(201).json(savedProject);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
