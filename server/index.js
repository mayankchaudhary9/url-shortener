import express from "express";

const app = express();

app.use("/api/auth");
app.use("/api/create");
app.use("/:id");

app.listen(5000, () => {
  console.log("Server is connected on port: 5000");
});

// routes we needs
// GET - Redirection
// POST - Create short url
