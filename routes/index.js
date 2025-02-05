const homeRoute = require("./homeRoute");

function route(app) {
  app.use("/", homeRoute);
}

module.exports = route;
