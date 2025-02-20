const properiesModel = require("../../models/property");
const { isValidObjectId } = require("mongoose");

exports.getAll = async (req, res) => {
  try {
    const properies = await properiesModel
      .find({ status: "ACCEPTED" })
      .populate("creator");

    return res.json(properies);
  } catch (error) {
    return res.status(500).json(error);
  }
};
exports.getAllByAdmin = async (req, res) => {
  try {
    const properies = await properiesModel.find({}).populate("creator");

    return res.json(properies);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.add = async (req, res) => {
  try {
    const { title, description, city, price } = req.body;

    const property = await properiesModel.create({
      title,
      description,
      city,
      price,
      creator: req.user._id,
    });

    return res.status(201).json({
      message: "Property created successfully",
      property,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.remove = async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({
        message: "PropertyID is not valid !!",
      });
    }

    const removePropery = await properiesModel.findOneAndDelete({ _id: id });

    if (!removePropery) {
      return res.status(404).json({
        message: "Property not found !!",
      });
    }

    return res.status(200).json({
      message: "Property Removed Successfully",
      removedProperty: removePropery,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.setStatus = async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId) {
      return res.status(400).json({
        message: "PropertyID is not valid !!",
      });
    }

    const editPropery = await properiesModel.findOneAndUpdate(
      { _id: id },
      {
        status: req.body.status,
      }
    );

    if (!editPropery) {
      return res.status(404).json({
        message: "Property not found !!",
      });
    }

    return res.status(200).json({
      message: "Status seted successfully",
      property: editPropery,
    });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
