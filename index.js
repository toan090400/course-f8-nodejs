const express = require("express");
const morgan = require("morgan");

const app = express();

const port = 3000;

// http logger
app.use(morgan("dev"));

// connect database
const database = require("./config/db/database");
database.connect();

// setup routeroute
const route = require("./routes/index");
route(app);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
