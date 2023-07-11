// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const dotenv=require("dotenv");
const cors = require("cors");
const app = express();

dotenv.config();
app.use(cors());
// Import user routes
const userRoutes = require("./routes/userRoutes");
const noteRoutes =require("./routes/noteRoutes");
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Welcome");
});

// Use user routes
app.use("/users", userRoutes);
app.use("/notes",noteRoutes); 

const url = process.env.MONGO_URL;
const PORT=process.env.PORT || 5000;
// Connect to the MongoDB database
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // Once connected, start the server
    
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((error) => {
    // If there is an error connecting to the database or starting the server
    console.error('Error:', error);
  });