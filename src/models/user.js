const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const schema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    uniqe: true,
  },
  email: {
    type: String,
    required: true,
    uniqe: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    uniqe: true,
  },
  role: {
    type: String,
    required: false,
    enum: ["ADMIN", "USER", "LANDLORD"],
  },
});

schema.pre("save", async function (next) {
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    next(error);
  }
});

const model = mongoose.model("User", schema);

module.exports = model;
