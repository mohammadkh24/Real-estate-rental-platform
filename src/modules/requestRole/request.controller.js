const requestModel = require("../../models/requestrole");

exports.getAll = async (req, res) => {
  try {
    const requests = await requestModel.find({}).populate("user", "-password");

    return res.json(requests);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.add = async (req, res) => {
  try {
    const { body } = req.body;

    if (!body || body.trim() === "") {
      return res.status(400).json({
        message: "Body cannot be empty!",
      });
    }

    const createReq = await requestModel.create({
      body,
      user: req.user._id,
    });

    return res.status(201).json({
      message: "Request created successfully",
      request: createReq,
    });
  } catch (error) {
    return res.status(500).json(error)
  }
};
