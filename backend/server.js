const express = require("express");
const data = require("./data");

const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.listen(9000, () => {
  console.log("Server started at 9000");
});
