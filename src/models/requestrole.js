const { body } = require("express-validator");
const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    body : {
        type : String,
        required : true
    }
  },
  { timestamps: true }
);

const model = mongoose.model("RequestRole", schema);
module.exports = model;
