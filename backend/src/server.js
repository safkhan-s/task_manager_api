require("dotenv").config();
const http = require("http");

const connectDb = require("./db/connect-db");
const expressApp = require("./express");

const port = process.env.PORT || 5000;

const serverUrl = process.env.dbString;
const dbUser = process.env.dbUser;
const dbPassword = process.env.dbPassword;
const server = http.createServer(expressApp);

async function startServer() {
  try {
    await connectDb(serverUrl, dbUser, dbPassword);
    server.listen(port, () =>
      console.log(`connected to db and server running on ${port}....`)
    );
  } catch (error) {
    console.log(error);
  }
}

startServer();
