const usersModel = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  const { username, email, password, phoneNumber } = req.body;

  const countOfUsers = await usersModel.countDocuments();

  const user = await usersModel.create({
    username,
    email,
    password,
    phoneNumber,
    role: countOfUsers > 0 ? "USER" : "ADMIN",
  });

  const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "30 days",
  });

  return res.status(201).json({
    message: "User registered successfully",
    token: accessToken,
  });
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  const user = await usersModel.findOne({ username });

  if (!user) {
    return res.status(404).json({
      message: "User not found !!",
    });
  }

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    return res.status(400).json({
      message: "Password is not valid !!",
    });
  }

  const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "30 days",
  });

  return res.status(200).json({
    message: "User logged in successfully",
    token: accessToken,
  });
};
