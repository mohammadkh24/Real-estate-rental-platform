const express = require("express");
const controller = require("./properties.controller");
const authMiddleware = require("../../middlewares/auth");
const isAdminMiddleware = require("../../middlewares/isAdmin");
const isLandlordMiddleware = require("../../middlewares/isLandlord");
const validateMiddleware = require("../../middlewares/validate");
const {  propertyValidator } = require("./properies.validator");

const router = express.Router();

router.route("/").get(controller.getAll);
router.route("/admin").get( authMiddleware , isAdminMiddleware ,controller.getAllByAdmin);
router.route("/add").post(authMiddleware, isLandlordMiddleware, propertyValidator() , validateMiddleware ,controller.add);
router.route("/:id/remove").delete(authMiddleware, isAdminMiddleware, controller.remove);
router.route("/:id/status").put(authMiddleware, isAdminMiddleware, controller.setStatus);




module.exports = router;
