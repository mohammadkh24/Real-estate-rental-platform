const express = require("express");
const router = express.Router();
const bookingController = require("./booking.controller");
const { bookingValidator } = require("./booking.validator");
const validateMiddleware = require("../../middlewares/validate");
const authMiddleware = require("../../middlewares/auth");
const isAdminMiddleware = require("../../middlewares/isAdmin");

router.post(
  "/book",
  authMiddleware,
  bookingValidator(),
  validateMiddleware,
  bookingController.addBooking
);

router.get("/", authMiddleware, bookingController.getAllBookings);

router.delete(
  "/:id",
  authMiddleware,
  isAdminMiddleware,
  bookingController.removeBooking
);

module.exports = router;
