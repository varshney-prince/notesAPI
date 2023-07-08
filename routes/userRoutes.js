// Import required modules
const express = require('express');
const userRouter = express.Router();
const{signup,signin}=require("../controllers/userController");

// Signup endpoint
userRouter.post("/signup",signup);

// Signin endpoint
userRouter.post("signin",signin);

module.exports = userRouter;
