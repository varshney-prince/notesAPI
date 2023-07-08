// Import required modules
const express = require('express');
const userRouter = express.Router();

// Signup endpoint
userRouter.post("/signup", (req, res) => {
  console.log("signup successful");
  res.send("Signup");
});

// Signin endpoint
userRouter.post("/signin", (req, res) => {
  res.send("Signin");
});

module.exports = userRouter;
