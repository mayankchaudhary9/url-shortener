import express from "express";
import dotenv from "dotenv";
import authRoutes from "./src/routes/auth.routes.js";
import short_url from "./src/routes/short_url.routes.js";
import connectDB from "./src/config/mongo.config.js";
import { attachUser } from "./src/utils/attachUser.js";
import short_urlController from "./src/controller/short_url.controller.js";
import { errorHandler } from "./src/utils/errorHandler.js";
import cors from "cors";
dotenv.config("./.env");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(attachUser);
app.use("/api/auth", authRoutes);
app.use("/api/create", short_url);
app.use("/:id", short_urlController.redirectFromShortUrl);
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(errorHandler);

app.listen(5000, () => {
  connectDB();
  console.log("Server is connected on port: 5000");
});

// routes we needs
// GET - Redirection
// POST - Create short url
