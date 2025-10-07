// 1. Load .env file to access environment variables
require('dotenv').config();

// 2. Import express
const express = require('express');

// 3. Import cors
const cors = require('cors');

// 4. Import the database connection
const db = require('./DB/connection');

// 5. Import your router (if you have one)
//const router = require('./Routes/router'); // Uncomment if you have routes

// 6. Create an app using express
const CarWorldServer = express();

// 7. Use middleware
CarWorldServer.use(cors());
CarWorldServer.use(express.json());

// If you have routes, un-comment and use this line
// CarWorldServer.use(router);

// 8. Port creation (fixing the port assignment)
const PORT = process.env.PORT || 3000;

// 9. Run the server and listen on the specified port
CarWorldServer.listen(PORT, () => {
    console.log("CarWorldServer running on the port " + PORT);
});

// 10. Basic route to check if the server is running
CarWorldServer.get('/', (req, res) => {
    res.send("Welcome to CarWorldServer");
});
