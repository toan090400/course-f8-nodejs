const express = require("express");
const morgan = require("morgan");

const app = express();
const port = 3000;

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World! new");
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
