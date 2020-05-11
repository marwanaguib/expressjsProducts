const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Test test :)" });
});

require("./app/routes/departments.route.js")(app);
require("./app/routes/products.route.js")(app);

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
