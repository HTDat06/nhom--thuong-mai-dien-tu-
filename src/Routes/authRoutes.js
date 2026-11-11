
const express = require("express");
const router = express.Router();

const authController = require("../Controllers/AuthController");

// API đăng ký tài khoản
router.post("/register", (req, res) => {
  authController.register(req, res);
});

module.exports = router;
