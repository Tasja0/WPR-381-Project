require('dotenv').config();
const flash = require('express-flash');
const express = require("express");
const path = require("path");
const session = require("express-session"); // Added session middleware
const pageRoutes = require("./routes/pageRoutes.js");
const contactRoutes = require("./routes/contactRoutes.js"); 

const app = express();
const port = 8000;

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Session setup (required for express-flash)
app.use(session({
  secret: "your-secret-key", // Replace with an actual secret key
  resave: false,
  saveUninitialized: true
}));

app.use(flash()); // Flash middleware should come after session setup

// View engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/", pageRoutes);
app.use("/contact", contactRoutes); 

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
