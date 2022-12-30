const mongoose = require("mongoose");

function connectDb(serverUrl, user, password) {
  mongoose.set("strictQuery", false);
  mongoose.connect(serverUrl, {
    authSource: "admin",
    auth: { username: user, password: password },
  });
}

module.exports = connectDb;
