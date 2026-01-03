// const express = require("express");
// const router = express.Router();
// const { getSettlement } = require("../controllers/settlementController");

// router.get("/:groupId", getSettlement);

// module.exports = router;
const express = require("express");
const router = express.Router();
const settlementController = require("../controllers/settlementController");

router.get("/:groupId", settlementController.calculateSettlement);

module.exports = router;