const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRouter = require("./modules/auth/auth.route")
const usersRouter = require("./modules/users/users.route")

const app = express();

// Get req.body
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rotes
app.use("/auth" , authRouter)
app.use("/users" , usersRouter)

// Not Found Route
app.use((req, res) => {
  return res.status(404).json({
    message: "404! Path Not Found !! Please check the path/method",
  });
});

module.exports = app;
