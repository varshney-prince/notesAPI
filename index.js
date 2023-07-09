// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const app = express();

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

const url = "mongodb+srv://princevarshney072:users@cluster0.ota0ny1.mongodb.net/";
// Connect to the MongoDB database
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // Once connected, start the server
    const port = 5000;
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  })
  .catch((error) => {
    // If there is an error connecting to the database or starting the server
    console.error('Error:', error);
  });