const express = require("express");
const path = require("path");

const taskRoutes = require("./routes/tasks");

const app = express();

app.use(express.static(path.join(__dirname, "../../frontend")));
app.use(express.json());

app.use("/api/v1/tasks", taskRoutes);

module.exports = app;
