import express from "express";
import dotenv from "dotenv";
import authRoutes from "./src/routes/auth.routes.js";
import connectDB from "./src/config/mongo.config.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

await connectDB();

app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  console.log("Server is connected on port: 5000");
});

// routes we needs
// GET - Redirection
// POST - Create short url
