const path = require("path");

let join = path.join(__dirname, "/index.js");
console.log("join = " + join);

let resolve = path.resolve(__dirname, "/index.js");
console.log("resolve = " + resolve );