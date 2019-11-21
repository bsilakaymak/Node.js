const padLeft = require("./andrejs-awesome-function.js");
const numbers = ["12", "846", "2", "1236"];
numbers.forEach(function(number) {
  console.log(padLeft(number, 8, ""));
});
