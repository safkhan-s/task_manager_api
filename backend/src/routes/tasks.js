const express = require("express");

const tasksControllers = require("../controllers/tasks");

const router = express.Router();

router.route("/").get(tasksControllers.allTasks);
router.route("/").post();
router.route("/:id").get();
router.route("/:id").put();
router.route("/:id").delete();

module.exports = router;
