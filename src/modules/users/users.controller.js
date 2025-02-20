const { isValidObjectId } = require("mongoose");
const usersModel = require("../../models/user");

exports.getAll = async (req, res) => {
  try {
    const users = await usersModel.find({}).select("-password");

    return res.json(users);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.remove = async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({
        message: "UserID is not valid !!",
      });
    }

    const removeUser = await usersModel
      .findOneAndDelete({ _id: id })
      .select("-password");

    if (!removeUser) {
      return res.status(404).json({
        message: "User not found !!",
      });
    }

    return res.status(200).json({
      message: "User Removed Successfully",
      removedUser: removeUser,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.edit = async (req, res) => {
  try {
    const { username, email, phoneNumber } = req.body;

    if (!username || !phoneNumber || !email) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }

    const editedUser = await usersModel
      .findOneAndUpdate(
        { _id: req.user._id },
        {
          username,
          phoneNumber,
          email,
        }
      )
      .select("-password");

    return res.status(200).json({
      message: "User edited successfully",
      editedUser,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.changeRole = async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({
        message: "UserID is not valid !!",
      });
    }

    const updateUser = await usersModel.findOneAndUpdate(
      { _id: id },
      {
        role: req.body.role,
      }
    );

    if (!updateUser) {
      return res.status(404).json({
        message: "User not found !!",
      });
    }

    return res.status(200).json({
      message: "Change role user successfull",
      updatedUser: updateUser,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};
