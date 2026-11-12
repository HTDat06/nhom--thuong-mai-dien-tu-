
const express = require("express");
const router = express.Router();

const { checkDatabase } = require("../Controllers/HealthController");

router.get("/db", checkDatabase);

module.exports = router;
