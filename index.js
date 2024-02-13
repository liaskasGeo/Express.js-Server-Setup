/*
Description:
This script uses the Express.js framework to create a simple web server.
It defines a single route for the root ("/") path that responds with the message "Hello, Git!".
The server is started and listens on port 3000, and a success message is logged to the console.
*/

// Import the Express framework
import express from "express";

// Create an Express application
const app = express();

// Set the port for the server to listen on
const port = 3000;

// Define a route for the root ("/") path
app.get("/", (req, res) => {
    // Send a response to the client with the message "Hello, Git!"
    res.send("Hello, Git!");
});

// Start the server and listen on the specified port
app.listen(3000, () => {
    // Log a message when the server is successfully started
    console.log(`Server running on port ${port}.`);
});


// Dependencies:
// - express: Web framework for Node.js
// Install dependencies using: npm install express