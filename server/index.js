require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { SERVER_PORT } = process.env;
const { addMotorcycle } = require("./motorcycleCtrl");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/motorcycle", addMotorcycle);

app.listen(SERVER_PORT, console.log(`Take us warp ${SERVER_PORT}!`));
