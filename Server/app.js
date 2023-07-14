const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// const cors = require("cors");
require("./connection.js");
const Routes = require("./routes.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cors());
// const { createProxyMiddleware } = require('http-proxy-middleware');
// const clientProxy = require('../Client/setupProxy');

// clientProxy(app);

app.listen(5000, () => {
  console.log("listening on port 5000...");
});

app.use("/", Routes);

app.get("/", (req, res) => {
  res.send("Hemlo");
});
