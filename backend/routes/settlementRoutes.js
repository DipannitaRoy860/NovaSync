
const express = require("express");
const router = express.Router();
const settlementController = require("../controllers/settlementController");

router.get("/:groupId", settlementController.calculateSettlement);

module.exports = router;