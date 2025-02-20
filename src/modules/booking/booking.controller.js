const Booking = require("../../models/booking");

exports.addBooking = async (req, res) => {
  try {
    const { property, totalPrice } = req.body;

    const existingBooking = await Booking.findOne({
      property,
    });

    if (existingBooking) {
      return res.status(400).json({
        message: "Booking already exists for the specified dates",
      });
    }

    const newBooking = await Booking.create({
      property,
      user : req.user._id,
      totalPrice,
    });

    return res.status(201).json({
      message: "Booking created successfully",
      booking: newBooking,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error creating booking",
      error: error.message,
    });
  }
};

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("property user");
    return res.status(200).json({
      message: "Bookings retrieved successfully",
      bookings,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error retrieving bookings",
      error: error.message,
    });
  }
};

exports.removeBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }

    return res.status(200).json({
      message: "Booking removed successfully",
      booking,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error removing booking",
      error: error.message,
    });
  }
};
