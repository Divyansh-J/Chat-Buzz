import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());
app.use(cookieParser());


mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Define routes
app.get("/", (req, res) => {
  res.send("Welcome to my API!"); 
});

//import routes
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500
  const message = err.message || "Internal Sever Erorr"
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
})