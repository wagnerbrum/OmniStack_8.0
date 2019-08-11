require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");

const server = express();

server.use(cors());
server.use(morgan("tiny"));

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

server.use(express.json());
server.use(routes);

server.listen(3333);
console.log(`Server is running in port: ${3333}`);
