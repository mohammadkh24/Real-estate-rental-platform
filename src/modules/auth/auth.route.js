const express = require("express");
const controller = require("./auth.controller");
const validateMiddleware = require("../../middlewares/validate");
const { userValidator } = require("./auth.validator");

const router = express.Router();

router
  .route("/register")
  .post(userValidator(), validateMiddleware, controller.register);
router.route("/login").post(controller.login);

module.exports = router;
