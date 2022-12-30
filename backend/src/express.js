const express = require("express");

const taskRoutes = require("./routes/tasks");
const homeRoutes = require("./routes/home");

const app = express();

app.use("/", homeRoutes);
app.use("/api/v1/tasks", taskRoutes);

module.exports = app;
