const express = require("express");
const controller = require("./request.controller");
const authMiddleware = require("../../middlewares/auth");
const isAdminMiddleware = require("../../middlewares/isAdmin");

const router = express.Router();

router.route("/").get(authMiddleware , isAdminMiddleware , controller.getAll)
router.route("/add").post(authMiddleware  , controller.add)


module.exports = router;