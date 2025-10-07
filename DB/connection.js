// In your DB/connection.js file
const mongoose = require('mongoose');
const connectionString = process.env.MONGO_URI;

mongoose.connect(connectionString)
.then(() => console.log("Connected to DB"))
.catch((err) => console.log("Error connecting to DB:", err));
