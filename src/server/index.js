const express = require('express');
const app = express();
const cors = require("cors");
const routes = require("../routes");
const postgresqlConnection = require("../helpers/database/postgresql/connection");
const helmet = require("helmet");

postgresqlConnection.init();

app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
routes.init(app);

module.exports = app;