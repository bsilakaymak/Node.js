const express = require("express");
const app = express();
app.get("/", function(req, res) {
  console.log(req.body);
  res.send("hello from backend to frontend!!!");
});
app.listen(3000, () => {
  console.log("Server started");
});
