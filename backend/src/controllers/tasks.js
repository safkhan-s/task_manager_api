const Task = require("../models/Task");

async function allTasks(req, res) {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ success: true, data: tasks });
  } catch (error) {
    res.status(400).json({
      success: false,
      data: error,
    });
  }
}

async function createTask(req, res) {
  try {
    const task = await Task.create(req.body);
    res.status(200).json({ success: true, data: task });
  } catch (error) {
    res.status(400).json({
      success: false,
      data: { name: error.name, message: error.errors.name.message },
    });
  }
}

async function getTask(req, res) {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOne({ _id: taskId });
    if (!task) {
      return res.status(404).json({
        success: true,
        data: { msg: `there is no task with id:${taskId}` },
      });
    }
    res.status(200).json({ success: true, data: task });
  } catch (error) {
    res.status(400).json({
      success: false,
      data: error,
    });
  }
}

async function updateTask(req, res) {
  try {
    const { id: taskId } = req.params;
    const userReq = req.body;
    // NOTE: new:returns updated object, runvalidators:runs validators you setup for model at start on updated object
    const task = await Task.findByIdAndUpdate({ _id: taskId }, userReq, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({
        success: true,
        data: { msg: `there is no task with id:${taskId}` },
      });
    }
    res.status(200).json({ success: true, data: task });
  } catch (error) {
    res.status(400).json({
      success: false,
      data: error,
    });
  }
}

async function deleteTask(req, res) {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findByIdAndDelete({ _id: taskId });
    if (!task) {
      return res.status(404).json({
        success: true,
        data: { msg: `there is no task with id:${taskId}` },
      });
    }
    res.status(200).json({ seccuss: true, task });
  } catch (error) {
    res.status(400).json({
      success: false,
      data: error,
    });
  }
}

module.exports = { allTasks, createTask, getTask, updateTask, deleteTask };
