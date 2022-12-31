const express = require("express");
const path = require("path");

const pageNotFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

const taskRoutes = require("./routes/tasks");

const app = express();

app.use(express.static(path.join(__dirname, "../../frontend")));
app.use(express.json());

// Routes
app.use("/api/v1/tasks", taskRoutes);

app.use(pageNotFound);
app.use(errorHandlerMiddleware);

module.exports = app;
