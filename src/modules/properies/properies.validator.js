const { body } = require("express-validator");

const propertyValidator = () => {
  return [
    body("title")
      .notEmpty()
      .withMessage("Title is required")
      .isLength({ max: 100 })
      .withMessage("Title must be at most 100 characters"),

    body("description")
      .notEmpty()
      .withMessage("Description is required")
      .isLength({ max: 1000 })
      .withMessage("Description must be at most 1000 characters"),

    body("city").notEmpty().withMessage("City is required"),

    body("price")
      .notEmpty()
      .withMessage("Price is required"),

    body("status")
      .optional()
      .isIn(["ACCEPTED", "REJECTED", "WAITING"])
      .withMessage("Invalid status value"),
  ];
};

module.exports = {propertyValidator}
