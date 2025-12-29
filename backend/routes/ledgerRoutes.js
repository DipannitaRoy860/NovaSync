const express = require("express");
const router = express.Router();
const { showLedger } = require("../controllers/expenseController");

router.get("/:groupId", showLedger);

module.exports = router;