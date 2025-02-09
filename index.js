const dotenv = require("dotenv");

const connectToDatabase = require("./src/database/connect");

dotenv.config();

connectToDatabase();

require("./modules/express");

// require("./modules/path");
// require("./modules/fs");
// require("./modules/http");
// const { Person } = require("./person");
// const person = new Person("dev");
