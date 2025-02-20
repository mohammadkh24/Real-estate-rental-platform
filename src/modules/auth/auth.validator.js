const { body } = require("express-validator");
const User = require("../../models/user")

const userValidator = () => {
  return [
    // Validate username
    body("username")
      .notEmpty()
      .withMessage("Username is required")
      .isLength({ min: 3 })
      .withMessage("Username must be at least 3 characters long")
      .isLength({ max: 30 })
      .withMessage("Username cannot exceed 30 characters")
      .custom(async (value) => {
        const user = await User.findOne({ username: value });
        if (user) {
          throw new Error("Username already exists");
        }
        return true;
      }),

    // Validate email
    body("email")
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Invalid email format")
      .custom(async (value) => {
        const user = await User.findOne({ email: value });
        if (user) {
          throw new Error("Email already exists");
        }
        return true;
      }),

    // Validate phoneNumber
    body("phoneNumber")
      .notEmpty()
      .withMessage("Phone number is required")
      .isMobilePhone()
      .withMessage("Invalid phone number format")
      .custom(async (value) => {
        const user = await User.findOne({ phoneNumber: value });
        if (user) {
          throw new Error("Phone number already exists");
        }
        return true;
      }),

    // Validate password
    body("password")
      .notEmpty()
      .withMessage("Password is required")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),

    // Validate role (optional)
    body("role")
      .optional()
      .isIn(["ADMIN", "USER", "LANDLORD"])
      .withMessage("Invalid role"),
  ];
};

module.exports = { userValidator };
