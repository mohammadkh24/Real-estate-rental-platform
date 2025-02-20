const express = require("express");
const controller = require("./users.controller");
const authMiddleware = require("../../middlewares/auth");
const isAdminMiddleware = require("../../middlewares/isAdmin");

const router = express.Router();

router.route("/").get(authMiddleware, isAdminMiddleware, controller.getAll);
router
  .route("/:id/remove")
  .delete(authMiddleware, isAdminMiddleware, controller.remove);
router
  .route("/edit")
  .put(authMiddleware, controller.edit);
router
  .route("/:id/role")
  .put(authMiddleware, isAdminMiddleware ,controller.changeRole);


module.exports = router;
