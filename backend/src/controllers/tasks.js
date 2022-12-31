const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

const allTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(200).json({ task });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await Task.findOne({ _id: taskId });
  if (!task) {
    return next(createCustomError(`there is no task with id:${taskId}`, 404));
  }
  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const userReq = req.body;
  // NOTE: new:returns updated object, runvalidators:runs validators you setup for model at start on updated object
  const task = await Task.findByIdAndUpdate({ _id: taskId }, userReq, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomError(`there is no task with id:${taskId}`, 404));
  }
  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findByIdAndDelete({ _id: taskId });
  if (!task) {
    return next(createCustomError(`there is no task with id:${taskId}`, 404));
  }
  res.status(200).json({ seccuss: true, task });
});

module.exports = { allTasks, createTask, getTask, updateTask, deleteTask };
