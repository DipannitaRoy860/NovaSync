const express = require("express");
const router = express.Router();
const groupController = require("../controllers/groupController");
console.log(typeof groupController.createGroup);
router.post("/create",groupController.createGroup);
router.post("/add-members",groupController.addMembers);
router.get("/:id", groupController.getGroup);

module.exports = router;