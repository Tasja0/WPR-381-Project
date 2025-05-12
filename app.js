// app.js

const express = require("express");
const path = require("path");
const pageRoutes = require("./routes/pageRoutes.js");

const app = express();
const port = 8000;

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", pageRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
