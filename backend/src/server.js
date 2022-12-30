require("dotenv").config();
const http = require("http");

const expressApp = require("./express");

const port = process.env.PORT || 5000;
const server = http.createServer(expressApp);

server.listen(port, () => console.log(`server running on ${port}....`));
