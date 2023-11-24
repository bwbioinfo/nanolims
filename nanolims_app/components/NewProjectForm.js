// components/NewProjectForm.js

import { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

const NewProjectForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the API endpoint
      const response = await fetch("/api/projects/createProject", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, description, createdBy: "user123" }), // Adjust the createdBy value as needed
      });

      if (response.ok) {
        // Handle success
        console.log("Project created successfully");
      } else {
        // Handle errors
        console.error("Failed to create project");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        label="Outlined"
        value={name}
        variant="outlined"
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="filled-basic"
        label="Filled"
        variant="filled"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button type="submit">Create Project</Button>
    </form>
  );
};

export default NewProjectForm;
