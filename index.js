const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const response = require("./response");
const axios = require("axios");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/webhook", (req, res) => {
  res.send(req.query);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
