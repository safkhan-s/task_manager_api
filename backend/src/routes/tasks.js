const express = require("express");

const tasksControllers = require("../controllers/tasks");

const router = express.Router();

router
  .route("/")
  .get(tasksControllers.allTasks)
  .post(tasksControllers.createTask);

router
  .route("/:id")
  .get(tasksControllers.getTask)
  .patch(tasksControllers.updateTask)
  .delete(tasksControllers.deleteTask);

module.exports = router;
