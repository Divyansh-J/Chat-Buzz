import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;


mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Define routes
app.get("/", (req, res) => {
  res.send("Welcome to my API!"); 
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});