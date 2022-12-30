function allTasks(req, res) {
  res.send("<h1>All tasks</h1>");
}

function createTask(req, res) {
  res.send("<h1>Create Task</h1>");
}
function getTask(req, res) {
  res.send("<h1>Get Task</h1>");
}
function updateTask(req, res) {
  res.send("<h1>Update Task</h1>");
}
function deleteTask(req, res) {
  res.send("<h1>Delete Task</h1>");
}

module.exports = { allTasks, createTask, getTask, updateTask, deleteTask };
