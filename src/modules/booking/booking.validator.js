const { body, validationResult } = require("express-validator");

const bookingValidator = () => {
  return [
    body("property")
      .notEmpty().withMessage("Property ID is required")
      .isMongoId().withMessage("Invalid Property ID"),

    body("totalPrice")
      .notEmpty().withMessage("Total Price is required")
      .isNumeric().withMessage("Total Price must be a number")
      .isFloat({ gt: 0 }).withMessage("Total Price must be greater than 0"),

  ];
};

module.exports = {
  bookingValidator,
};
