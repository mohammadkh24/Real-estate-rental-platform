const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    property: {
      type: mongoose.Types.ObjectId,
      ref: "Property",
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const model = mongoose.model("Booking", schema);

module.exports = model;
