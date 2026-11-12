const express = require("express");
const router = express.Router();
const { authenticate, requireAdmin } = require("../Middlewares/authMiddleware");

router.get("/", authenticate, requireAdmin, (req, res) => {
  res.json({
    success: true,
    message: "Chào mừng quản trị viên đến với trang quản trị."
  });
});

module.exports = router;
